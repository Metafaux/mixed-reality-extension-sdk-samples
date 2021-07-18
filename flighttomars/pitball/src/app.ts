// Copyright (c) Alexander D. Wilson. All rights reserved.
// Licensed under the MIT License.

import * as MRE from "@microsoft/mixed-reality-extension-sdk";

export default class PitBall {
    private sphere: MRE.Actor = null;

    constructor(private context: MRE.Context) {
        console.log("started");
    }
}
