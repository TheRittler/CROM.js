import {Constraint} from "crom_l1_composed/Constraint";
import {RoleType} from "crom_l1_composed/RoleType";
import {Acyclic} from "crom_l1_composed/Acyclic";
import {Inheritance} from "crom_l1_composed/Inheritance";
import {Irreflexive} from "crom_l1_composed/Irreflexive";
import {DataInheritance} from "crom_l1_composed/DataInheritance";
import {Crom_l1_composedPackageImpl} from "crom_l1_composed/Crom_l1_composedPackageImpl";
import {CompartmentInheritance} from "crom_l1_composed/CompartmentInheritance";
import {RoleProhibition} from "crom_l1_composed/RoleProhibition";
import {Reflexive} from "crom_l1_composed/Reflexive";
import {RoleImplication} from "crom_l1_composed/RoleImplication";
import {RoleInheritance} from "crom_l1_composed/RoleInheritance";
import {RoleGroup} from "crom_l1_composed/RoleGroup";
import {Fulfillment} from "crom_l1_composed/Fulfillment";
import {InterRelationshipConstraint} from "crom_l1_composed/InterRelationshipConstraint";
import {Part} from "crom_l1_composed/Part";
import {NaturalInheritance} from "crom_l1_composed/NaturalInheritance";
import {AntiRigidType} from "crom_l1_composed/AntiRigidType";
import {NamedElement} from "crom_l1_composed/NamedElement";
import {ComplexConstraint} from "crom_l1_composed/ComplexConstraint";
import {Group} from "crom_l1_composed/Group";
import {Crom_l1_composedPackage} from "crom_l1_composed/Crom_l1_composedPackage";
import {RelationshipConstraint} from "crom_l1_composed/RelationshipConstraint";
import {Attribute} from "crom_l1_composed/Attribute";
import {TypedElement} from "crom_l1_composed/TypedElement";
import {RoleGroupElement} from "crom_l1_composed/RoleGroupElement";
import {Operation} from "crom_l1_composed/Operation";
import {ModelElement} from "crom_l1_composed/ModelElement";
import {Relation} from "crom_l1_composed/Relation";
import {RelationshipImplication} from "crom_l1_composed/RelationshipImplication";
import {DataType} from "crom_l1_composed/DataType";
import {RigidType} from "crom_l1_composed/RigidType";
import {CompartmentType} from "crom_l1_composed/CompartmentType";
import {IntraRelationshipConstraint} from "crom_l1_composed/IntraRelationshipConstraint";
import {RoleConstraint} from "crom_l1_composed/RoleConstraint";
import {RelationTarget} from "crom_l1_composed/RelationTarget";
import {RoleEquivalence} from "crom_l1_composed/RoleEquivalence";
import {Type} from "crom_l1_composed/Type";
import {Cyclic} from "crom_l1_composed/Cyclic";
import {NaturalType} from "crom_l1_composed/NaturalType";
import {Relationship} from "crom_l1_composed/Relationship";
import {Total} from "crom_l1_composed/Total";
import {AbstractRoleRef} from "crom_l1_composed/AbstractRoleRef";
import {Model} from "crom_l1_composed/Model";
import {Parameter} from "crom_l1_composed/Parameter";
import {RelationshipExclusion} from "crom_l1_composed/RelationshipExclusion";
import {AbstractRole} from "crom_l1_composed/AbstractRole";
import {Place} from "crom_l1_composed/Place";
import {ParthoodConstraint} from "crom_l1_composed/ParthoodConstraint";
import {Switch} from "ecore/Switch";
import {EObject} from "ecore/EObject";
import {EPackage} from "ecore/EPackage";
export class Crom_l1_composedSwitch<T> extends Switch<T> {
	protected static modelPackage:Crom_l1_composedPackage;
	
	constructor(){
		super();
		if (Crom_l1_composedSwitch.modelPackage == null) {
			Crom_l1_composedSwitch.modelPackage = Crom_l1_composedPackageImpl.eINSTANCE;
		}	
	}
	
	public isSwitchFor(ePackage:EPackage):boolean{
		return ePackage === Crom_l1_composedSwitch.modelPackage;
	}
	
	public doSwitch(classifierID:number, theEObject:EObject):T {
		switch (classifierID) {
			case Crom_l1_composedPackageImpl.NAMEDELEMENT: {
				let obj:NamedElement = <NamedElement>theEObject;
				let result:T = this.caseNamedElement(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case Crom_l1_composedPackageImpl.MODELELEMENT: {
				let obj:ModelElement = <ModelElement>theEObject;
				let result:T = this.caseModelElement(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case Crom_l1_composedPackageImpl.MODEL: {
				let obj:Model = <Model>theEObject;
				let result:T = this.caseModel(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case Crom_l1_composedPackageImpl.RIGIDTYPE: {
				let obj:RigidType = <RigidType>theEObject;
				let result:T = this.caseRigidType(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case Crom_l1_composedPackageImpl.GROUP: {
				let obj:Group = <Group>theEObject;
				let result:T = this.caseGroup(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case Crom_l1_composedPackageImpl.RELATION: {
				let obj:Relation = <Relation>theEObject;
				let result:T = this.caseRelation(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case Crom_l1_composedPackageImpl.PARAMETER: {
				let obj:Parameter = <Parameter>theEObject;
				let result:T = this.caseParameter(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case Crom_l1_composedPackageImpl.OPERATION: {
				let obj:Operation = <Operation>theEObject;
				let result:T = this.caseOperation(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case Crom_l1_composedPackageImpl.ATTRIBUTE: {
				let obj:Attribute = <Attribute>theEObject;
				let result:T = this.caseAttribute(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case Crom_l1_composedPackageImpl.TYPE: {
				let obj:Type = <Type>theEObject;
				let result:T = this.caseType(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case Crom_l1_composedPackageImpl.DATATYPE: {
				let obj:DataType = <DataType>theEObject;
				let result:T = this.caseDataType(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case Crom_l1_composedPackageImpl.NATURALTYPE: {
				let obj:NaturalType = <NaturalType>theEObject;
				let result:T = this.caseNaturalType(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case Crom_l1_composedPackageImpl.COMPARTMENTTYPE: {
				let obj:CompartmentType = <CompartmentType>theEObject;
				let result:T = this.caseCompartmentType(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case Crom_l1_composedPackageImpl.ANTIRIGIDTYPE: {
				let obj:AntiRigidType = <AntiRigidType>theEObject;
				let result:T = this.caseAntiRigidType(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case Crom_l1_composedPackageImpl.ROLETYPE: {
				let obj:RoleType = <RoleType>theEObject;
				let result:T = this.caseRoleType(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case Crom_l1_composedPackageImpl.RELATIONSHIP: {
				let obj:Relationship = <Relationship>theEObject;
				let result:T = this.caseRelationship(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case Crom_l1_composedPackageImpl.FULFILLMENT: {
				let obj:Fulfillment = <Fulfillment>theEObject;
				let result:T = this.caseFulfillment(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case Crom_l1_composedPackageImpl.INHERITANCE: {
				let obj:Inheritance = <Inheritance>theEObject;
				let result:T = this.caseInheritance(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case Crom_l1_composedPackageImpl.CONSTRAINT: {
				let obj:Constraint = <Constraint>theEObject;
				let result:T = this.caseConstraint(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case Crom_l1_composedPackageImpl.ROLECONSTRAINT: {
				let obj:RoleConstraint = <RoleConstraint>theEObject;
				let result:T = this.caseRoleConstraint(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case Crom_l1_composedPackageImpl.RELATIONSHIPCONSTRAINT: {
				let obj:RelationshipConstraint = <RelationshipConstraint>theEObject;
				let result:T = this.caseRelationshipConstraint(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case Crom_l1_composedPackageImpl.INTRARELATIONSHIPCONSTRAINT: {
				let obj:IntraRelationshipConstraint = <IntraRelationshipConstraint>theEObject;
				let result:T = this.caseIntraRelationshipConstraint(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case Crom_l1_composedPackageImpl.INTERRELATIONSHIPCONSTRAINT: {
				let obj:InterRelationshipConstraint = <InterRelationshipConstraint>theEObject;
				let result:T = this.caseInterRelationshipConstraint(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case Crom_l1_composedPackageImpl.COMPLEXCONSTRAINT: {
				let obj:ComplexConstraint = <ComplexConstraint>theEObject;
				let result:T = this.caseComplexConstraint(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case Crom_l1_composedPackageImpl.DATAINHERITANCE: {
				let obj:DataInheritance = <DataInheritance>theEObject;
				let result:T = this.caseDataInheritance(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case Crom_l1_composedPackageImpl.NATURALINHERITANCE: {
				let obj:NaturalInheritance = <NaturalInheritance>theEObject;
				let result:T = this.caseNaturalInheritance(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case Crom_l1_composedPackageImpl.COMPARTMENTINHERITANCE: {
				let obj:CompartmentInheritance = <CompartmentInheritance>theEObject;
				let result:T = this.caseCompartmentInheritance(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case Crom_l1_composedPackageImpl.ROLEINHERITANCE: {
				let obj:RoleInheritance = <RoleInheritance>theEObject;
				let result:T = this.caseRoleInheritance(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case Crom_l1_composedPackageImpl.PLACE: {
				let obj:Place = <Place>theEObject;
				let result:T = this.casePlace(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case Crom_l1_composedPackageImpl.RELATIONSHIPIMPLICATION: {
				let obj:RelationshipImplication = <RelationshipImplication>theEObject;
				let result:T = this.caseRelationshipImplication(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case Crom_l1_composedPackageImpl.RELATIONSHIPEXCLUSION: {
				let obj:RelationshipExclusion = <RelationshipExclusion>theEObject;
				let result:T = this.caseRelationshipExclusion(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case Crom_l1_composedPackageImpl.RELATIONTARGET: {
				let obj:RelationTarget = <RelationTarget>theEObject;
				let result:T = this.caseRelationTarget(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case Crom_l1_composedPackageImpl.IRREFLEXIVE: {
				let obj:Irreflexive = <Irreflexive>theEObject;
				let result:T = this.caseIrreflexive(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case Crom_l1_composedPackageImpl.CYCLIC: {
				let obj:Cyclic = <Cyclic>theEObject;
				let result:T = this.caseCyclic(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case Crom_l1_composedPackageImpl.TOTAL: {
				let obj:Total = <Total>theEObject;
				let result:T = this.caseTotal(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case Crom_l1_composedPackageImpl.ACYCLIC: {
				let obj:Acyclic = <Acyclic>theEObject;
				let result:T = this.caseAcyclic(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case Crom_l1_composedPackageImpl.REFLEXIVE: {
				let obj:Reflexive = <Reflexive>theEObject;
				let result:T = this.caseReflexive(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case Crom_l1_composedPackageImpl.ABSTRACTROLE: {
				let obj:AbstractRole = <AbstractRole>theEObject;
				let result:T = this.caseAbstractRole(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case Crom_l1_composedPackageImpl.ROLEGROUP: {
				let obj:RoleGroup = <RoleGroup>theEObject;
				let result:T = this.caseRoleGroup(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case Crom_l1_composedPackageImpl.ROLEIMPLICATION: {
				let obj:RoleImplication = <RoleImplication>theEObject;
				let result:T = this.caseRoleImplication(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case Crom_l1_composedPackageImpl.ROLEEQUIVALENCE: {
				let obj:RoleEquivalence = <RoleEquivalence>theEObject;
				let result:T = this.caseRoleEquivalence(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case Crom_l1_composedPackageImpl.ROLEPROHIBITION: {
				let obj:RoleProhibition = <RoleProhibition>theEObject;
				let result:T = this.caseRoleProhibition(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case Crom_l1_composedPackageImpl.PART: {
				let obj:Part = <Part>theEObject;
				let result:T = this.casePart(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case Crom_l1_composedPackageImpl.TYPEDELEMENT: {
				let obj:TypedElement = <TypedElement>theEObject;
				let result:T = this.caseTypedElement(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case Crom_l1_composedPackageImpl.PARTHOODCONSTRAINT: {
				let obj:ParthoodConstraint = <ParthoodConstraint>theEObject;
				let result:T = this.caseParthoodConstraint(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case Crom_l1_composedPackageImpl.ROLEGROUPELEMENT: {
				let obj:RoleGroupElement = <RoleGroupElement>theEObject;
				let result:T = this.caseRoleGroupElement(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			case Crom_l1_composedPackageImpl.ABSTRACTROLEREF: {
				let obj:AbstractRoleRef = <AbstractRoleRef>theEObject;
				let result:T = this.caseAbstractRoleRef(obj);
				if (result == null) result = this.defaultCase(theEObject);
				return result;
			}
			default: return this.defaultCase(theEObject);
		}
	}
	
	
	public caseNamedElement(object:NamedElement):T {
		return null;
	}
	public caseModelElement(object:ModelElement):T {
		return null;
	}
	public caseModel(object:Model):T {
		return null;
	}
	public caseRigidType(object:RigidType):T {
		return null;
	}
	public caseGroup(object:Group):T {
		return null;
	}
	public caseRelation(object:Relation):T {
		return null;
	}
	public caseParameter(object:Parameter):T {
		return null;
	}
	public caseOperation(object:Operation):T {
		return null;
	}
	public caseAttribute(object:Attribute):T {
		return null;
	}
	public caseType(object:Type):T {
		return null;
	}
	public caseDataType(object:DataType):T {
		return null;
	}
	public caseNaturalType(object:NaturalType):T {
		return null;
	}
	public caseCompartmentType(object:CompartmentType):T {
		return null;
	}
	public caseAntiRigidType(object:AntiRigidType):T {
		return null;
	}
	public caseRoleType(object:RoleType):T {
		return null;
	}
	public caseRelationship(object:Relationship):T {
		return null;
	}
	public caseFulfillment(object:Fulfillment):T {
		return null;
	}
	public caseInheritance(object:Inheritance):T {
		return null;
	}
	public caseConstraint(object:Constraint):T {
		return null;
	}
	public caseRoleConstraint(object:RoleConstraint):T {
		return null;
	}
	public caseRelationshipConstraint(object:RelationshipConstraint):T {
		return null;
	}
	public caseIntraRelationshipConstraint(object:IntraRelationshipConstraint):T {
		return null;
	}
	public caseInterRelationshipConstraint(object:InterRelationshipConstraint):T {
		return null;
	}
	public caseComplexConstraint(object:ComplexConstraint):T {
		return null;
	}
	public caseDataInheritance(object:DataInheritance):T {
		return null;
	}
	public caseNaturalInheritance(object:NaturalInheritance):T {
		return null;
	}
	public caseCompartmentInheritance(object:CompartmentInheritance):T {
		return null;
	}
	public caseRoleInheritance(object:RoleInheritance):T {
		return null;
	}
	public casePlace(object:Place):T {
		return null;
	}
	public caseRelationshipImplication(object:RelationshipImplication):T {
		return null;
	}
	public caseRelationshipExclusion(object:RelationshipExclusion):T {
		return null;
	}
	public caseRelationTarget(object:RelationTarget):T {
		return null;
	}
	public caseIrreflexive(object:Irreflexive):T {
		return null;
	}
	public caseCyclic(object:Cyclic):T {
		return null;
	}
	public caseTotal(object:Total):T {
		return null;
	}
	public caseAcyclic(object:Acyclic):T {
		return null;
	}
	public caseReflexive(object:Reflexive):T {
		return null;
	}
	public caseAbstractRole(object:AbstractRole):T {
		return null;
	}
	public caseRoleGroup(object:RoleGroup):T {
		return null;
	}
	public caseRoleImplication(object:RoleImplication):T {
		return null;
	}
	public caseRoleEquivalence(object:RoleEquivalence):T {
		return null;
	}
	public caseRoleProhibition(object:RoleProhibition):T {
		return null;
	}
	public casePart(object:Part):T {
		return null;
	}
	public caseTypedElement(object:TypedElement):T {
		return null;
	}
	public caseParthoodConstraint(object:ParthoodConstraint):T {
		return null;
	}
	public caseRoleGroupElement(object:RoleGroupElement):T {
		return null;
	}
	public caseAbstractRoleRef(object:AbstractRoleRef):T {
		return null;
	}
	
}

