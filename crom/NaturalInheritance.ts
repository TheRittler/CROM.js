import {Inheritance} from "crom_l1_composed/Inheritance";
import {NaturalType} from "crom_l1_composed/NaturalType";
import {OrderedSet} from "ecore/OrderedSet";

export interface NaturalInheritance
extends Inheritance

{
	
	super:NaturalType;
	sub:NaturalType;
	

}

