import {Relation} from "crom_l1_composed/Relation";
import {Type} from "crom_l1_composed/Type";
import {AbstractRole} from "crom_l1_composed/AbstractRole";
import {OrderedSet} from "ecore/OrderedSet";

export interface Fulfillment
extends Relation

{
	
	filled:AbstractRole;
	filler:Type;
	

}

