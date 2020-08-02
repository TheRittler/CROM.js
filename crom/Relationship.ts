import {Relation} from "crom_l1_composed/Relation";
import {IntraRelationshipConstraint} from "crom_l1_composed/IntraRelationshipConstraint";
import {NamedElement} from "crom_l1_composed/NamedElement";
import {Direction} from "crom_l1_composed/Direction";
import {Place} from "crom_l1_composed/Place";
import {OrderedSet} from "ecore/OrderedSet";
import {Set} from "ecore/Set";

export interface Relationship
extends Relation,
NamedElement

{
	direction:Direction;
	
	first:Place;
	second:Place;
	tr_constraints: Set<IntraRelationshipConstraint>;
	

}

