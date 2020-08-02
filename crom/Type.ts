import {Attribute} from "crom_l1_composed/Attribute";
import {Operation} from "crom_l1_composed/Operation";
import {RelationTarget} from "crom_l1_composed/RelationTarget";
import {OrderedSet} from "ecore/OrderedSet";

export interface Type
extends RelationTarget

{
	
	attributes: OrderedSet<Attribute>;
	operations: OrderedSet<Operation>;
	

}

