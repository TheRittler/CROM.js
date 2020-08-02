import {AntiRigidType} from "crom_l1_composed/AntiRigidType";
import {AbstractRole} from "crom_l1_composed/AbstractRole";
import {OrderedSet} from "ecore/OrderedSet";

export interface RoleType
extends AntiRigidType,
AbstractRole

{

	tr_extends:RoleType;


}

