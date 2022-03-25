(function scopeWrapper ($) {
  // get the element to animate
  let fI = document.getElementsByClassName('fI')
  let fIR = document.getElementsByClassName('fIR')
  let fIU = document.getElementsByClassName('fIU')
  let fIL = document.getElementsByClassName('fIL')
  let fID = document.getElementsByClassName('fID')

  // listen for scroll event and call animate function
  document.addEventListener('scroll', animate)

  // Check if any of the elements are in view
  animate()

  // animate element when it is in view
  function animate () {
    for (let i = 0, len = fI.length; i < len; i++) {
      const children = fI[i]
      // is element in view?
      if (inView(children)) {
        // Convert children to classList
        // element is in view, add class to element
        const childrenCL = children.classList
        childrenCL.add('fadeIn')
        childrenCL.remove('fI')
      }
    }

    for (let i = 0, len = fIR.length; i < len; i++) {
      const children = fIR[i]
      // is element in view?
      if (inView(children)) {
        // Fade in right for element
        const childrenCL = children.classList
        childrenCL.add('fadeInRight')
        childrenCL.remove('fIR')
      }
    }

    for (let i = 0, len = fIU.length; i < len; i++) {
      const children = fIU[i]
      // is element in view?
      if (inView(children)) {
        // Fade in Up for element
        const childrenCL = children.classList
        childrenCL.add('fadeInUp')
        childrenCL.remove('fIU')
      }
    }

    for (let i = 0, len = fIL.length; i < len; i++) {
      const children = fIL[i]
      // is element in view?
      if (inView(children)) {
        // Fade in left for all the children
        const childrenCL = children.classList
        childrenCL.add('fadeInLeft')
        childrenCL.remove('fIL')
      }
    }

    for (let i = 0, len = fID.length; i < len; i++) {
      const children = fID[i]
      // is element in view?
      if (inView(children)) {
        // Fade in left for all the children
        const childrenCL = children.classList
        childrenCL.add('fadeInDown')
        childrenCL.remove('fID')
      }
    }

    // Recalculate the fadeable elements
    fI = document.getElementsByClassName('fI')
    fIR = document.getElementsByClassName('fIR')
    fIU = document.getElementsByClassName('fIU')
    fIL = document.getElementsByClassName('fIL')
    fID = document.getElementsByClassName('fID')

    if (isEmpty(fIL) && isEmpty(fIU) && isEmpty(fIR) && isEmpty(fI) && isEmpty(fID)) {
      // Remove event listener
      document.removeEventListener('scroll', animate)
    }
  }
}(jQuery))

// check if element is in view
function inView (element) {
  if (isEmpty(element)) {
    return
  }

  // get window height
  const windowHeight = window.innerHeight
  // get number of pixels that the document is scrolled
  const scrollY = window.scrollY || window.pageYOffset
  const elementHeight = element.clientHeight
  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  const scrollPosition = scrollY + windowHeight
  // get element position (distance from the top of the page to the bottom of the element)
  const elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight

  // is scroll position greater than element position? (is element in view?)
  if (scrollPosition > elementPosition) {
    return true
  }

  return false
}
