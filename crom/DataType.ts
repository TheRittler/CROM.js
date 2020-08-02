import {RigidType} from "crom_l1_composed/RigidType";
import {OrderedSet} from "ecore/OrderedSet";

export interface DataType
extends RigidType

{
	serializable:boolean;

	tr_extends:DataType;


}

