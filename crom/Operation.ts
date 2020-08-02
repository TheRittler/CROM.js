import {Type} from "crom_l1_composed/Type";
import {TypedElement} from "crom_l1_composed/TypedElement";
import {Parameter} from "crom_l1_composed/Parameter";
import {OrderedSet} from "ecore/OrderedSet";

export interface Operation
extends TypedElement

{
	operation:string;
	
	params: OrderedSet<Parameter>;
	owner:Type;
	

}

