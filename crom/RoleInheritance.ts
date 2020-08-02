import {RoleType} from "crom_l1_composed/RoleType";
import {Inheritance} from "crom_l1_composed/Inheritance";
import {OrderedSet} from "ecore/OrderedSet";

export interface RoleInheritance
extends Inheritance

{
	
	super:RoleType;
	sub:RoleType;
	

}

