import {CompartmentType} from "crom_l1_composed/CompartmentType";
import {AbstractRole} from "crom_l1_composed/AbstractRole";
import {OrderedSet} from "ecore/OrderedSet";
import {InternalEObject} from "ecore/InternalEObject";

export interface Part
extends InternalEObject

{
	lower:number;
	upper:number;
	
	whole:CompartmentType;
	role:AbstractRole;
	

}

