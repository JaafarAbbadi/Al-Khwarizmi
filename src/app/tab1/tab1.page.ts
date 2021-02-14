import { Component } from '@angular/core';
import { SceneService } from '../services/scene.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(
    private sceneService: SceneService
  ) {}
  ionViewDidEnter(){
    this.sceneService.init(document.getElementById('renderCanvas') as HTMLCanvasElement);
  }
  ionViewDidLeave(){
    this.sceneService.destroy();
  }

}
