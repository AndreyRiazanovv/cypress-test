export class DatepickerModel {
    constructor() {
        this.datepickerInput = () => cy.get('[.class="size-medium shape-rectangle"]');  
        this.commonDatepickerInput = () => cy.get('[.class="appearance-filled size-medium status-primary shape-rectangle transitions"]');
    }

    openDatepicker() {
        cy.get(this.datepickerInput).click();
      }
      selectToday() {
        
      }
    
      getCommonDatepickerValue() {
        return cy.get(this.commonDatepickerInput).invoke('val');
      }
    }
    
    