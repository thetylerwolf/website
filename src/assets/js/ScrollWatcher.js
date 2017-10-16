export default class ScrollWatcher {

  constructor() {
    this.scrollStart = function() {}
    this.scrollEnd = function() {}
  }

  init() {

    this.scrollEvent = function(e) {

      if(this.scrollTimeout) {
        clearTimeout( this.scrollTimeout )
      } else {
        this.scrollStart(e)
      }

      this.scrollTimeout = setTimeout( () => {
        this.scrollTimeout = false
        this.scrollEnd(e)
      }, 100)

    }.bind(this)

    document.addEventListener( 'scroll', this.scrollEvent, { passive: true } )

    return this

  }

  onScrollEnd(fn) {
    this.scrollEnd = fn
    return this
  }

  onScrollStart(fn) {
    this.scrollStart = fn
    return this
  }

  remove() {
    document.removeEventListener( 'scroll', this.scrollEvent, false )
  }

}
