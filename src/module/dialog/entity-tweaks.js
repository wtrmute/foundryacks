//called from actor-sheet.js for AcksEntityTweaks


// eslint-disable-next-line no-unused-vars
export class AcksEntityTweaks extends FormApplication {
  static get defaultOptions() {
    const options = super.defaultOptions;
    options.id = 'sheet-tweaks';
    options.template =
      'systems/acks/templates/actors/dialogs/tweaks-dialog.html';
    options.width = 380;
    return options;
  }

  /* -------------------------------------------- */

  /**
   * Add the Entity name into the window title
   * @type {String}
   */
  get title() {
    return `${this.object.name}: ${game.i18n.localize('ACKS.dialog.tweaks')}`;
  }

  /* -------------------------------------------- */

  /**
   * Construct and return the data object used to render the HTML template for this form application.
   * @return {Object}
   */
  getData() {
    const context = this.object;

    context.isCharacter = context.type === 'character';

    context.user = game.user;
    context.config = CONFIG.ACKS;

    return context;
  }

  /* -------------------------------------------- */

  /** @override */
  activateListeners(html) {
    super.activateListeners(html);
  }

  /**
   * This method is called upon form submission after form data is validated
   * @param event {Event}       The initial triggering submission event
   * @param formData {Object}   The object of validated form data with which to update the object
   * @private
   */
  async _updateObject(event, formData) {
    event.preventDefault();

    // Update the actor.
    this.object.updateSource(formData);

    // Render the updated sheet.
    this.object.sheet.render(true);
  }
}
