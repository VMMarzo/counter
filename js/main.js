
  isMobile: boolean = false;


  hours: number = 0;
  minutes: number = 0;

  private addHoursTimeoutId: any;
  private addHoursIntervalId: any;

  private subtractHoursTimeoutId: any;
  private subtractHoursIntervalId: any;

  private addMinutesTimeoutId: any;
  private addMinutesIntervalId: any;

  private subtractMinutesTimeoutId: any;
  private subtractMinutesIntervalId: any;


  timeAndRatingValidator(): ValidatorFn {
    return (group: AbstractControl): { [key: string]: any } | null => {
      const total = this.hours + this.minutes;
      const validTime = total > 0;
      const validRating = this.selectedStar > 0;
      return validTime && validRating ? null : { 'invalidTimeOrRating': { value: group.value } };
    };
  }


  checkWindowSize() {
    this.isMobile = window.innerWidth <= 768;
  }

  addHours() {
    if (this.hours < 99) {
      this.hours++;
    }
    this.updateFormsValidity();
  }

  subtractHours() {
    if (this.hours > 0) {
      this.hours--;
    }
    this.updateFormsValidity();
  }

  addMinutes() {
    if (this.hours < 99 || this.minutes < 45) {
      if (this.minutes < 45) {
        this.minutes += 15;
      } else {
        this.minutes = 0;
        this.addHours();
      }
    }
    this.updateFormsValidity();
  }

  subtractMinutes() {
    if (this.hours > 0 || this.minutes > 0) {
      if (this.minutes > 0) {
        this.minutes -= 15;
      } else {
        this.minutes = 45;
        this.subtractHours();
      }
    }
    this.updateFormsValidity();
  }

  startAddingHours() {
    this.addHoursTimeoutId = setTimeout(() => {
      this.addHoursIntervalId = setInterval(() => {
        this.addHours();
      }, 100);
    }, 100);
    this.updateFormsValidity();
  }

  stopAddingHours() {
    if (this.addHoursTimeoutId) {
      clearTimeout(this.addHoursTimeoutId);
      this.addHours();
    }
    if (this.addHoursIntervalId) {
      clearInterval(this.addHoursIntervalId);
    }
    this.updateFormsValidity();
  }

  startSubtractingHours() {
    this.subtractHoursTimeoutId = setTimeout(() => {
      this.subtractHoursIntervalId = setInterval(() => {
        this.subtractHours();
      }, 100);
    }, 100);
    this.updateFormsValidity();
  }

  stopSubtractingHours() {
    if (this.subtractHoursTimeoutId) {
      clearTimeout(this.subtractHoursTimeoutId);
      this.subtractHours();
    }
    if (this.subtractHoursIntervalId) {
      clearInterval(this.subtractHoursIntervalId);
    }
    this.updateFormsValidity();
  }

  startAddingMinutes() {
    this.addMinutesTimeoutId = setTimeout(() => {
      this.addMinutesIntervalId = setInterval(() => {
        this.addMinutes();
      }, 100);
    }, 100);
    this.updateFormsValidity();
  }

  stopAddingMinutes() {
    if (this.addMinutesTimeoutId) {
      clearTimeout(this.addMinutesTimeoutId);
      this.addMinutes();
    }
    if (this.addMinutesIntervalId) {
      clearInterval(this.addMinutesIntervalId);
    }
    this.updateFormsValidity();
  }

  startSubtractingMinutes() {
    this.subtractMinutesTimeoutId = setTimeout(() => {
      this.subtractMinutesIntervalId = setInterval(() => {
        this.subtractMinutes();
      }, 100);
    }, 100);
    this.updateFormsValidity();
  }

  stopSubtractingMinutes() {
    if (this.subtractMinutesTimeoutId) {
      clearTimeout(this.subtractMinutesTimeoutId);
      this.subtractMinutes();
    }
    if (this.subtractMinutesIntervalId) {
      clearInterval(this.subtractMinutesIntervalId);
    }
    this.updateFormsValidity();
  }