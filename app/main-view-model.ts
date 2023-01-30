import { Observable } from '@nativescript/core'

export class HelloWorldModel extends Observable {
  private _counter: number
  private _message: string
  private _originalCounter: number

  constructor() {
    super()

    // Initialize default values.
    this._counter = 15
    this.updateMessage()
    this._originalCounter = this._counter
  }

  get message(): string {
    return this._message
  }

  set message(value: string) {
    if (this._message !== value) {
      this._message = value
      this.notifyPropertyChange('message', value)
    }
  }

  onTap() {
    this._counter--
    this.updateMessage()
  }

  private updateMessage() {
    if (this._counter <= 0) {
      this.message = 'Congrats! You pushed a button ' + this._originalCounter + " times."
    } else {
      this.message = `${this._counter} taps left`
    }
  }
}
