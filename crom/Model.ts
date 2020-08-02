import {ModelElement} from "crom_l1_composed/ModelElement";
import {Relation} from "crom_l1_composed/Relation";
import {Set} from "ecore/Set";
import {InternalEObject} from "ecore/InternalEObject";

export interface Model
extends InternalEObject

{
	
	elements: Set<ModelElement>;
	relations: Set<Relation>;
	

}

