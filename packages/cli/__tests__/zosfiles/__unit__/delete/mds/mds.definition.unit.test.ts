/*
* This program and the accompanying materials are made available under the terms of the
* Eclipse Public License v2.0 which accompanies this distribution, and is available at
* https://www.eclipse.org/legal/epl-v20.html
*
* SPDX-License-Identifier: EPL-2.0
*
* Copyright Contributors to the Zowe Project.
*
*/

import i18nEnglish from "../../../../../src/zosfiles/-strings-/en";
import { MdsDefinition } from "../../../../../src/zosfiles/delete/mds/Mds.definition";

describe("MdsDefinition", () => {
    it("should use the correct object for strings", () => {
        const strings = i18nEnglish.DELETE.ACTIONS.MIGRATED_DATA_SET;

        expect(MdsDefinition.description).toBe(strings.DESCRIPTION);
    });
});