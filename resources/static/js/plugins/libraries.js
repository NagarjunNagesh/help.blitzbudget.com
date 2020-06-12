let locale = "en-US";
// Toast for mixin (Notification)
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});

function splitElement(str, splitString) {
    if (includesStr(str, splitString)) {
        return isEmpty(str) ? str : str.split(splitString);
    }

    return str;
}


function lastElement(arr) {
    if (Array.isArray(arr)) {
        return isEmpty(arr) ? arr : arr[arr.length - 1];
    }
    return arr;
}

function includesStr(arr, val) {
    return isEmpty(arr) ? null : arr.includes(val);
}

function isEmpty(obj) {
    // Check if objext is a number or a boolean
    if (typeof (obj) == 'number' || typeof (obj) == 'boolean') return false;

    // Check if obj is null or undefined
    if (obj == null || obj === undefined) return true;

    // Check if the length of the obj is defined
    if (typeof (obj.length) != 'undefined') return obj.length == 0;

    // check if obj is a custom obj
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) return false;
    }

    // Check if obj is an element
    if (obj instanceof Element) return false;

    return true;
}

function isNotEmpty(obj) {
    return !isEmpty(obj);
}

//Format numbers in Indian Currency
function formatNumber(num, locale) {
    if (isEmpty(locale)) {
        locale = "en-US";
    }

    return num.toLocaleString(locale, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

function animateValue(element, start, end, prefix, duration) {
    // If start == end then return
    if (start == end) {
        // Set as text content
        if (isNotEmpty(prefix)) {
            element.textContent = prefix + formatNumber(end, locale);
        } else {
            element.textContent = end;
        }
        return;
    }

    // If different 
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));

    let timer = setInterval(function () {
        // If start == end then return
        if (current >= end) {
            clearInterval(timer);
        } else {
            // Incremenet current (append prefix)
            current += increment;
            // Set as text content
            if (isNotEmpty(prefix)) {
                element.textContent = prefix + formatNumber(current, locale);
            } else {
                element.textContent = current;
            }
        }
    }, stepTime);
}

// Replace HTML
function replaceHTML(el, html) {
    var oldEl = typeof el === "string" ? document.getElementById(el) : el;
    /*@cc_on // Pure innerHTML is slightly faster in IE
        oldEl.innerHTML = html;
        return oldEl;
    @*/
    var newEl = oldEl.cloneNode(false);
    newEl.innerHTML = html;
    oldEl.parentNode.replaceChild(newEl, oldEl);
    /* Since we just removed the old element from the DOM, return a reference
    to the new element, which can be used to restore variable references. */
    return newEl;
}

// Minimize the decimals to a set variable
function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}


// Introduce Chartist pie chart
function buildPieChart(dataPreferences, id, absoluteTotal) {
    /*  **************** Public Preferences - Pie Chart ******************** */

    let optionsPreferences = {
        donut: true,
        donutWidth: 25,
        startAngle: 270,
        showLabel: false
    };

    let responsiveOptions = [
	  ['screen and (max-width: 640px)', {
            chartPadding: 60
	  }],
	  ['screen and (max-width: 992px)', {
            chartPadding: 30
  	  }],
  	  ['screen and (max-width: 1301px)', {
            chartPadding: 25
	  }]
	];

    // Reset the chart
    replaceHTML(id, '');
    $("#" + id).tooltip('dispose');

    // Append Tooltip for Doughnut chart
    if (isNotEmpty(dataPreferences)) {
        let categoryBreakdownChart = new Chartist.Pie('#' + id, dataPreferences, optionsPreferences, responsiveOptions);

        // Animate the doughnut chart
        startAnimationDonutChart(categoryBreakdownChart);
    }
}

function formatLargeCurrencies(value) {

    if (value >= 1000000000) {
        value = (value / 1000000000) + 'B';
        return value;
    }

    if (value >= 1000000) {
        value = (value / 1000000) + 'M';
        return value;
    }

    if (value >= 1000) {
        value = (value / 1000) + 'k';
        return value;
    }

    return value;
}

function startAnimationDonutChart(chart) {

    chart.on('draw', function (data) {
        if (data.type === 'slice') {
            // Get the total path length in order to use for dash array animation
            var pathLength = data.element._node.getTotalLength();

            // Set a dasharray that matches the path length as prerequisite to animate dashoffset
            data.element.attr({
                'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
            });

            // Change the duration of the animation based on the length of the series
            let durAnim = 1000;
            if (chart.data.series.length > 12) {
                durAnim = 100;
            } else if (chart.data.series.length > 9) {
                durAnim = 200;
            } else if (chart.data.series.length > 6) {
                durAnim = 400;
            } else if (chart.data.series.length > 3) {
                durAnim = 600;
            }

            // Create animation definition while also assigning an ID to the animation for later sync usage
            var animationDefinition = {
                'stroke-dashoffset': {
                    id: 'anim' + data.index,
                    dur: durAnim,
                    from: -pathLength + 'px',
                    to: '0px',
                    easing: Chartist.Svg.Easing.easeOutQuint,
                    // We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
                    fill: 'freeze'
                }
            };

            // If this was not the first slice, we need to time the animation so that it uses the end sync event of the previous animation
            if (data.index !== 0) {
                animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
            }

            // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
            data.element.attr({
                'stroke-dashoffset': -pathLength + 'px'
            });

            // We can't use guided mode as the animations need to rely on setting begin manually
            // See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
            data.element.animate(animationDefinition, false);
        }
    });
}

function isEqual(obj1, obj2) {
    if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
        return true;
    }
    return false;
}

function groupByKey(xs, key) {
    return xs.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
};

function isNotEqual(obj1, obj2) {
    return !isEqual(obj1, obj2);
}

// Update the footer year
(function scopeWrapper($) {
    // Current Year
    document.getElementById('currentYear').innerText = new Date().getFullYear();
    // Mobile Menu Button
    document.getElementById('mobileMenuButton').addEventListener("click", function () {
        this.parentNode.classList.toggle('is-open');
    });
}(jQuery));
