import { Scene } from "phaser";
import { discordSdk } from "../utils/discordSDK";
export class MainMenu extends Scene {
  constructor() {
    super("MainMenu");
  }

  async create() {
    const bg = this.add.image(
      this.cameras.main.width / 2,
      this.cameras.main.height / 2,
      "background"
    );
    let scaleX = this.cameras.main.width / bg.width + 0.2;
    let scaleY = this.cameras.main.height / bg.height + 0.2;
    let scale = Math.max(scaleX, scaleY);
    bg.setScale(scale).setScrollFactor(0);

    this.add.image(Number(this.game.config.width) * 0.5, 300, "logo");

    const start = this.add
      .text(Number(this.game.config.width) * 0.5, 460, "Start", {
        fontFamily: "Arial Black",
        fontSize: 38,
        color: "#ffffff",
        stroke: "#000000",
        strokeThickness: 8,
        align: "center",
      })
      .setOrigin(0.5).setInteractive({
        cursor: "pointer",
      }).on("pointerdown", async () => {
        // await discordSdk.authenticate();
        this.scene.start("Game");
      })


  }
}
