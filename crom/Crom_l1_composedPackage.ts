import {EClass} from "ecore/EClass";
import {EAttribute} from "ecore/EAttribute";
import {EEnum} from "ecore/EEnum";
import {EReference} from "ecore/EReference";
import {EPackage} from "ecore/EPackage";
export interface Crom_l1_composedPackage extends EPackage {
	getNamedElement():EClass;
	
	getNamedElement_Name():EAttribute;
	getModelElement():EClass;
	
	getModel():EClass;
	getModel_Elements():EReference;
	getModel_Relations():EReference;
	
	getRelationTarget():EClass;
	getRelationTarget_Incoming():EReference;
	getRelationTarget_Outgoing():EReference;
	
	getType():EClass;
	getType_Attributes():EReference;
	getType_Operations():EReference;
	
	getRigidType():EClass;
	
	getGroup():EClass;
	
	getRelation():EClass;
	
	getTypedElement():EClass;
	getTypedElement_Type():EReference;
	
	getParameter():EClass;
	
	getOperation():EClass;
	getOperation_Params():EReference;
	getOperation_Owner():EReference;
	
	getOperation_Operation():EAttribute;
	getAttribute():EClass;
	getAttribute_Owner():EReference;
	
	getDataType():EClass;
	getDataType_Tr_extends():EReference;
	
	getDataType_Serializable():EAttribute;
	getNaturalType():EClass;
	getNaturalType_Tr_extends():EReference;
	
	getCompartmentType():EClass;
	getCompartmentType_Parts():EReference;
	getCompartmentType_Relationships():EReference;
	getCompartmentType_Constraints():EReference;
	getCompartmentType_Tr_extends():EReference;
	getCompartmentType_Contains():EReference;
	getCompartmentType_Fulfillments():EReference;
	
	getAntiRigidType():EClass;
	
	getRoleGroupElement():EClass;
	
	getAbstractRole():EClass;
	
	getRoleType():EClass;
	getRoleType_Tr_extends():EReference;
	
	getRelationship():EClass;
	getRelationship_First():EReference;
	getRelationship_Second():EReference;
	getRelationship_Tr_constraints():EReference;
	
	getRelationship_Direction():EAttribute;
	getFulfillment():EClass;
	getFulfillment_Filled():EReference;
	getFulfillment_Filler():EReference;
	
	getInheritance():EClass;
	
	getConstraint():EClass;
	
	getRoleConstraint():EClass;
	getRoleConstraint_First():EReference;
	getRoleConstraint_Second():EReference;
	
	getRelationshipConstraint():EClass;
	
	getIntraRelationshipConstraint():EClass;
	getIntraRelationshipConstraint_Relation():EReference;
	
	getInterRelationshipConstraint():EClass;
	getInterRelationshipConstraint_First():EReference;
	getInterRelationshipConstraint_Second():EReference;
	
	getComplexConstraint():EClass;
	getComplexConstraint_Targets():EReference;
	
	getComplexConstraint_Expression():EAttribute;
	getDataInheritance():EClass;
	getDataInheritance_Super():EReference;
	getDataInheritance_Sub():EReference;
	
	getNaturalInheritance():EClass;
	getNaturalInheritance_Super():EReference;
	getNaturalInheritance_Sub():EReference;
	
	getCompartmentInheritance():EClass;
	getCompartmentInheritance_Super():EReference;
	getCompartmentInheritance_Sub():EReference;
	
	getRoleInheritance():EClass;
	getRoleInheritance_Super():EReference;
	getRoleInheritance_Sub():EReference;
	
	getPlace():EClass;
	getPlace_Holder():EReference;
	
	getPlace_Lower():EAttribute;
	getPlace_Upper():EAttribute;
	getRelationshipImplication():EClass;
	
	getRelationshipExclusion():EClass;
	
	getIrreflexive():EClass;
	
	getCyclic():EClass;
	
	getTotal():EClass;
	
	getAcyclic():EClass;
	
	getReflexive():EClass;
	
	getRoleGroup():EClass;
	getRoleGroup_Elements():EReference;
	
	getRoleGroup_Lower():EAttribute;
	getRoleGroup_Upper():EAttribute;
	getRoleImplication():EClass;
	
	getRoleEquivalence():EClass;
	
	getRoleProhibition():EClass;
	
	getPart():EClass;
	getPart_Whole():EReference;
	getPart_Role():EReference;
	
	getPart_Lower():EAttribute;
	getPart_Upper():EAttribute;
	getParthoodConstraint():EClass;
	
	getParthoodConstraint_Kind():EAttribute;
	getAbstractRoleRef():EClass;
	getAbstractRoleRef_Ref():EReference;
	
	getDirection():EEnum;
	getParthood():EEnum;
}
