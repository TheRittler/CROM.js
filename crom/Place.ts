import {RoleType} from "crom_l1_composed/RoleType";
import {OrderedSet} from "ecore/OrderedSet";
import {InternalEObject} from "ecore/InternalEObject";

export interface Place
extends InternalEObject

{
	lower:number;
	upper:number;
	
	holder:RoleType;
	

}

