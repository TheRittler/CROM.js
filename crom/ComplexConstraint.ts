import {Constraint} from "crom_l1_composed/Constraint";
import {AbstractRole} from "crom_l1_composed/AbstractRole";
import {OrderedSet} from "ecore/OrderedSet";
import {Set} from "ecore/Set";

export interface ComplexConstraint
extends Constraint

{
	expression:string;
	
	targets: Set<AbstractRole>;
	

}

