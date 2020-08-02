import {Fulfillment} from "crom_l1_composed/Fulfillment";
import {Constraint} from "crom_l1_composed/Constraint";
import {Part} from "crom_l1_composed/Part";
import {Relationship} from "crom_l1_composed/Relationship";
import {RigidType} from "crom_l1_composed/RigidType";
import {OrderedSet} from "ecore/OrderedSet";
import {Set} from "ecore/Set";

export interface CompartmentType
extends RigidType

{

	parts: Set<Part>;
	relationships: OrderedSet<Relationship>;
	constraints: OrderedSet<Constraint>;
	tr_extends:CompartmentType;
	contains: OrderedSet<CompartmentType>;
	fulfillments: OrderedSet<Fulfillment>;


}

