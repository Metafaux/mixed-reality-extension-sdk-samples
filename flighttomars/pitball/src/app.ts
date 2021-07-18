// Copyright (c) Alexander D. Wilson. All rights reserved.
// Licensed under the MIT License.

import * as MRE from '@microsoft/mixed-reality-extension-sdk';

export default class PitBall {
  private ball: MRE.Actor = null;
  private assets: MRE.AssetContainer;

  constructor(private context: MRE.Context) {
    this.context.onStarted(() => this.started());
  }

  private async started() {
    console.log('started');

    this.assets = new MRE.AssetContainer(this.context);

    const ballData = await this.assets.loadGltf('ball.glb', 'box');

    this.ball = MRE.Actor.CreateFromPrefab(this.context, {
      firstPrefabFrom: ballData,
      actor: {
        name: 'Ball for ball pit',
        transform: {
          local: {
            position: { x: 0, y: -1, z: 0 },
            scale: { x: 0.4, y: 0.4, z: 0.4 },
          },
        },
      },
    });
  }
}
