const Card = require("../../Card");
const { PRIORITY_NIGHT_ROLE_BLOCKER } = require("../../const/Priority");

module.exports = class NightNurse extends Card {
  constructor(role) {
    super(role);

    this.meetings = {
      Nurse: {
        states: ["Night"],
        flags: ["voting"],
        action: {
          labels: ["save", "block"],
          priority: PRIORITY_NIGHT_ROLE_BLOCKER + 1,
          run: function () {
            this.blockActions();
            this.heal(1);
          },
        },
      },
    };
  }
};
