import {Relation} from "crom_l1_composed/Relation";
import {NamedElement} from "crom_l1_composed/NamedElement";
import {Set} from "ecore/Set";

export interface RelationTarget
extends NamedElement

{
	
	incoming: Set<Relation>;
	outgoing: Set<Relation>;
	

}

