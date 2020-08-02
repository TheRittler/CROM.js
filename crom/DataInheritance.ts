import {Inheritance} from "crom_l1_composed/Inheritance";
import {DataType} from "crom_l1_composed/DataType";
import {OrderedSet} from "ecore/OrderedSet";

export interface DataInheritance
extends Inheritance

{
	
	super:DataType;
	sub:DataType;
	

}

