import {Constraint} from "crom_l1_composed/Constraint";
import {AbstractRole} from "crom_l1_composed/AbstractRole";
import {OrderedSet} from "ecore/OrderedSet";

export interface RoleConstraint
extends Constraint

{
	
	first:AbstractRole;
	second:AbstractRole;
	

}

