import {RoleGroupElement} from "crom_l1_composed/RoleGroupElement";
import {AbstractRole} from "crom_l1_composed/AbstractRole";
import {RelationTarget} from "crom_l1_composed/RelationTarget";
import {OrderedSet} from "ecore/OrderedSet";
import {Set} from "ecore/Set";

export interface RoleGroup
extends AbstractRole,
RelationTarget

{
	lower:number;
	upper:number;
	
	elements: Set<RoleGroupElement>;
	

}

