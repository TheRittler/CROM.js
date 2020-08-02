import {RelationshipConstraint} from "crom_l1_composed/RelationshipConstraint";
import {Relationship} from "crom_l1_composed/Relationship";
import {OrderedSet} from "ecore/OrderedSet";

export interface IntraRelationshipConstraint
extends RelationshipConstraint

{
	
	relation:Relationship;
	

}

