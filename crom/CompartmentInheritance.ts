import {CompartmentType} from "crom_l1_composed/CompartmentType";
import {Inheritance} from "crom_l1_composed/Inheritance";
import {OrderedSet} from "ecore/OrderedSet";

export interface CompartmentInheritance
extends Inheritance

{
	
	super:CompartmentType;
	sub:CompartmentType;
	

}

