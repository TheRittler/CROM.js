export class Crom_l1_composedPackageLiterals{
	public static NAMEDELEMENT:number = 0;
	public static NAMEDELEMENT_FEATURE_COUNT:number = 1;
	public static NAMEDELEMENT_OPERATION_COUNT:number = 0;

	public static NAMED_ELEMENT__NAME:number = 0;

	public static MODELELEMENT:number = 1;
	public static MODELELEMENT_FEATURE_COUNT:number = Crom_l1_composedPackageLiterals.NAMEDELEMENT_FEATURE_COUNT + 0;
	public static MODELELEMENT_OPERATION_COUNT:number = Crom_l1_composedPackageLiterals.NAMEDELEMENT_OPERATION_COUNT + 0;

	public static MODEL_ELEMENT__NAME:number = 0;

	public static MODEL:number = 2;
	public static MODEL_FEATURE_COUNT:number = 2;
	public static MODEL_OPERATION_COUNT:number = 0;

	public static MODEL__ELEMENTS:number = 0;
	public static MODEL__RELATIONS:number = 1;

	public static RELATIONTARGET:number = 33;
	public static RELATIONTARGET_FEATURE_COUNT:number = Crom_l1_composedPackageLiterals.NAMEDELEMENT_FEATURE_COUNT + 2;
	public static RELATIONTARGET_OPERATION_COUNT:number = Crom_l1_composedPackageLiterals.NAMEDELEMENT_OPERATION_COUNT + 0;

	public static RELATION_TARGET__NAME:number = 0;
	public static RELATION_TARGET__INCOMING:number = 1;
	public static RELATION_TARGET__OUTGOING:number = 2;

	public static TYPE:number = 9;
	public static TYPE_FEATURE_COUNT:number = Crom_l1_composedPackageLiterals.RELATIONTARGET_FEATURE_COUNT + 2;
	public static TYPE_OPERATION_COUNT:number = Crom_l1_composedPackageLiterals.RELATIONTARGET_OPERATION_COUNT + 0;

	public static TYPE__NAME:number = 0;
	public static TYPE__INCOMING:number = 1;
	public static TYPE__OUTGOING:number = 2;
	public static TYPE__ATTRIBUTES:number = 3;
	public static TYPE__OPERATIONS:number = 4;

	public static RIGIDTYPE:number = 3;
	public static RIGIDTYPE_FEATURE_COUNT:number = Crom_l1_composedPackageLiterals.TYPE_FEATURE_COUNT + Crom_l1_composedPackageLiterals.MODELELEMENT_FEATURE_COUNT + 0;
	public static RIGIDTYPE_OPERATION_COUNT:number = Crom_l1_composedPackageLiterals.TYPE_OPERATION_COUNT + Crom_l1_composedPackageLiterals.MODELELEMENT_OPERATION_COUNT + 0;

	public static RIGID_TYPE__NAME:number = 0;
	public static RIGID_TYPE__INCOMING:number = 1;
	public static RIGID_TYPE__OUTGOING:number = 2;
	public static RIGID_TYPE__ATTRIBUTES:number = 3;
	public static RIGID_TYPE__OPERATIONS:number = 4;

	public static GROUP:number = 4;
	public static GROUP_FEATURE_COUNT:number = Crom_l1_composedPackageLiterals.MODELELEMENT_FEATURE_COUNT + Crom_l1_composedPackageLiterals.MODEL_FEATURE_COUNT + 0;
	public static GROUP_OPERATION_COUNT:number = Crom_l1_composedPackageLiterals.MODELELEMENT_OPERATION_COUNT + Crom_l1_composedPackageLiterals.MODEL_OPERATION_COUNT + 0;

	public static GROUP__NAME:number = 0;
	public static GROUP__ELEMENTS:number = 1;
	public static GROUP__RELATIONS:number = 2;

	public static RELATION:number = 5;
	public static RELATION_FEATURE_COUNT:number = 0;
	public static RELATION_OPERATION_COUNT:number = 2;


	public static TYPEDELEMENT:number = 45;
	public static TYPEDELEMENT_FEATURE_COUNT:number = Crom_l1_composedPackageLiterals.NAMEDELEMENT_FEATURE_COUNT + 1;
	public static TYPEDELEMENT_OPERATION_COUNT:number = Crom_l1_composedPackageLiterals.NAMEDELEMENT_OPERATION_COUNT + 0;

	public static TYPED_ELEMENT__NAME:number = 0;
	public static TYPED_ELEMENT__TYPE:number = 1;

	public static PARAMETER:number = 6;
	public static PARAMETER_FEATURE_COUNT:number = Crom_l1_composedPackageLiterals.TYPEDELEMENT_FEATURE_COUNT + 0;
	public static PARAMETER_OPERATION_COUNT:number = Crom_l1_composedPackageLiterals.TYPEDELEMENT_OPERATION_COUNT + 0;

	public static PARAMETER__NAME:number = 0;
	public static PARAMETER__TYPE:number = 1;

	public static OPERATION:number = 7;
	public static OPERATION_FEATURE_COUNT:number = Crom_l1_composedPackageLiterals.TYPEDELEMENT_FEATURE_COUNT + 3;
	public static OPERATION_OPERATION_COUNT:number = Crom_l1_composedPackageLiterals.TYPEDELEMENT_OPERATION_COUNT + 0;

	public static OPERATION__NAME:number = 0;
	public static OPERATION__TYPE:number = 1;
	public static OPERATION__PARAMS:number = 2;
	public static OPERATION__OPERATION:number = 3;
	public static OPERATION__OWNER:number = 4;

	public static ATTRIBUTE:number = 8;
	public static ATTRIBUTE_FEATURE_COUNT:number = Crom_l1_composedPackageLiterals.TYPEDELEMENT_FEATURE_COUNT + 1;
	public static ATTRIBUTE_OPERATION_COUNT:number = Crom_l1_composedPackageLiterals.TYPEDELEMENT_OPERATION_COUNT + 0;

	public static ATTRIBUTE__NAME:number = 0;
	public static ATTRIBUTE__TYPE:number = 1;
	public static ATTRIBUTE__OWNER:number = 2;

	public static DATATYPE:number = 10;
	public static DATATYPE_FEATURE_COUNT:number = Crom_l1_composedPackageLiterals.RIGIDTYPE_FEATURE_COUNT + 2;
	public static DATATYPE_OPERATION_COUNT:number = Crom_l1_composedPackageLiterals.RIGIDTYPE_OPERATION_COUNT + 0;

	public static DATA_TYPE__NAME:number = 0;
	public static DATA_TYPE__INCOMING:number = 1;
	public static DATA_TYPE__OUTGOING:number = 2;
	public static DATA_TYPE__ATTRIBUTES:number = 3;
	public static DATA_TYPE__OPERATIONS:number = 4;
	public static DATA_TYPE__SERIALIZABLE:number = 5;
	public static DATA_TYPE__TR_EXTENDS:number = 6;

	public static NATURALTYPE:number = 11;
	public static NATURALTYPE_FEATURE_COUNT:number = Crom_l1_composedPackageLiterals.RIGIDTYPE_FEATURE_COUNT + 1;
	public static NATURALTYPE_OPERATION_COUNT:number = Crom_l1_composedPackageLiterals.RIGIDTYPE_OPERATION_COUNT + 0;

	public static NATURAL_TYPE__NAME:number = 0;
	public static NATURAL_TYPE__INCOMING:number = 1;
	public static NATURAL_TYPE__OUTGOING:number = 2;
	public static NATURAL_TYPE__ATTRIBUTES:number = 3;
	public static NATURAL_TYPE__OPERATIONS:number = 4;
	public static NATURAL_TYPE__TR_EXTENDS:number = 5;

	public static COMPARTMENTTYPE:number = 12;
	public static COMPARTMENTTYPE_FEATURE_COUNT:number = Crom_l1_composedPackageLiterals.RIGIDTYPE_FEATURE_COUNT + 6;
	public static COMPARTMENTTYPE_OPERATION_COUNT:number = Crom_l1_composedPackageLiterals.RIGIDTYPE_OPERATION_COUNT + 0;

	public static COMPARTMENT_TYPE__NAME:number = 0;
	public static COMPARTMENT_TYPE__INCOMING:number = 1;
	public static COMPARTMENT_TYPE__OUTGOING:number = 2;
	public static COMPARTMENT_TYPE__ATTRIBUTES:number = 3;
	public static COMPARTMENT_TYPE__OPERATIONS:number = 4;
	public static COMPARTMENT_TYPE__PARTS:number = 5;
	public static COMPARTMENT_TYPE__RELATIONSHIPS:number = 6;
	public static COMPARTMENT_TYPE__CONSTRAINTS:number = 7;
	public static COMPARTMENT_TYPE__TR_EXTENDS:number = 8;
	public static COMPARTMENT_TYPE__CONTAINS:number = 9;
	public static COMPARTMENT_TYPE__FULFILLMENTS:number = 10;

	public static ANTIRIGIDTYPE:number = 13;
	public static ANTIRIGIDTYPE_FEATURE_COUNT:number = Crom_l1_composedPackageLiterals.TYPE_FEATURE_COUNT + 0;
	public static ANTIRIGIDTYPE_OPERATION_COUNT:number = Crom_l1_composedPackageLiterals.TYPE_OPERATION_COUNT + 0;

	public static ANTI_RIGID_TYPE__NAME:number = 0;
	public static ANTI_RIGID_TYPE__INCOMING:number = 1;
	public static ANTI_RIGID_TYPE__OUTGOING:number = 2;
	public static ANTI_RIGID_TYPE__ATTRIBUTES:number = 3;
	public static ANTI_RIGID_TYPE__OPERATIONS:number = 4;

	public static ROLEGROUPELEMENT:number = 47;
	public static ROLEGROUPELEMENT_FEATURE_COUNT:number = 0;
	public static ROLEGROUPELEMENT_OPERATION_COUNT:number = 0;


	public static ABSTRACTROLE:number = 39;
	public static ABSTRACTROLE_FEATURE_COUNT:number = Crom_l1_composedPackageLiterals.ROLEGROUPELEMENT_FEATURE_COUNT + 0;
	public static ABSTRACTROLE_OPERATION_COUNT:number = Crom_l1_composedPackageLiterals.ROLEGROUPELEMENT_OPERATION_COUNT + 0;


	public static ROLETYPE:number = 14;
	public static ROLETYPE_FEATURE_COUNT:number = Crom_l1_composedPackageLiterals.ANTIRIGIDTYPE_FEATURE_COUNT + Crom_l1_composedPackageLiterals.ABSTRACTROLE_FEATURE_COUNT + 1;
	public static ROLETYPE_OPERATION_COUNT:number = Crom_l1_composedPackageLiterals.ANTIRIGIDTYPE_OPERATION_COUNT + Crom_l1_composedPackageLiterals.ABSTRACTROLE_OPERATION_COUNT + 0;

	public static ROLE_TYPE__NAME:number = 0;
	public static ROLE_TYPE__INCOMING:number = 1;
	public static ROLE_TYPE__OUTGOING:number = 2;
	public static ROLE_TYPE__ATTRIBUTES:number = 3;
	public static ROLE_TYPE__OPERATIONS:number = 4;
	public static ROLE_TYPE__TR_EXTENDS:number = 5;

	public static RELATIONSHIP:number = 15;
	public static RELATIONSHIP_FEATURE_COUNT:number = Crom_l1_composedPackageLiterals.RELATION_FEATURE_COUNT + Crom_l1_composedPackageLiterals.NAMEDELEMENT_FEATURE_COUNT + 4;
	public static RELATIONSHIP_OPERATION_COUNT:number = Crom_l1_composedPackageLiterals.RELATION_OPERATION_COUNT + Crom_l1_composedPackageLiterals.NAMEDELEMENT_OPERATION_COUNT + 0;

	public static RELATIONSHIP__NAME:number = 0;
	public static RELATIONSHIP__FIRST:number = 1;
	public static RELATIONSHIP__SECOND:number = 2;
	public static RELATIONSHIP__DIRECTION:number = 3;
	public static RELATIONSHIP__TR_CONSTRAINTS:number = 4;

	public static FULFILLMENT:number = 16;
	public static FULFILLMENT_FEATURE_COUNT:number = Crom_l1_composedPackageLiterals.RELATION_FEATURE_COUNT + 2;
	public static FULFILLMENT_OPERATION_COUNT:number = Crom_l1_composedPackageLiterals.RELATION_OPERATION_COUNT + 0;

	public static FULFILLMENT__FILLED:number = 0;
	public static FULFILLMENT__FILLER:number = 1;

	public static INHERITANCE:number = 17;
	public static INHERITANCE_FEATURE_COUNT:number = Crom_l1_composedPackageLiterals.RELATION_FEATURE_COUNT + 0;
	public static INHERITANCE_OPERATION_COUNT:number = Crom_l1_composedPackageLiterals.RELATION_OPERATION_COUNT + 0;


	public static CONSTRAINT:number = 18;
	public static CONSTRAINT_FEATURE_COUNT:number = Crom_l1_composedPackageLiterals.RELATION_FEATURE_COUNT + 0;
	public static CONSTRAINT_OPERATION_COUNT:number = Crom_l1_composedPackageLiterals.RELATION_OPERATION_COUNT + 0;


	public static ROLECONSTRAINT:number = 19;
	public static ROLECONSTRAINT_FEATURE_COUNT:number = Crom_l1_composedPackageLiterals.CONSTRAINT_FEATURE_COUNT + 2;
	public static ROLECONSTRAINT_OPERATION_COUNT:number = Crom_l1_composedPackageLiterals.CONSTRAINT_OPERATION_COUNT + 0;

	public static ROLE_CONSTRAINT__FIRST:number = 0;
	public static ROLE_CONSTRAINT__SECOND:number = 1;

	public static RELATIONSHIPCONSTRAINT:number = 20;
	public static RELATIONSHIPCONSTRAINT_FEATURE_COUNT:number = Crom_l1_composedPackageLiterals.CONSTRAINT_FEATURE_COUNT + 0;
	public static RELATIONSHIPCONSTRAINT_OPERATION_COUNT:number = Crom_l1_composedPackageLiterals.CONSTRAINT_OPERATION_COUNT + 0;


	public static INTRARELATIONSHIPCONSTRAINT:number = 21;
	public static INTRARELATIONSHIPCONSTRAINT_FEATURE_COUNT:number = Crom_l1_composedPackageLiterals.RELATIONSHIPCONSTRAINT_FEATURE_COUNT + 1;
	public static INTRARELATIONSHIPCONSTRAINT_OPERATION_COUNT:number = Crom_l1_composedPackageLiterals.RELATIONSHIPCONSTRAINT_OPERATION_COUNT + 0;

	public static INTRA_RELATIONSHIP_CONSTRAINT__RELATION:number = 0;

	public static INTERRELATIONSHIPCONSTRAINT:number = 22;
	public static INTERRELATIONSHIPCONSTRAINT_FEATURE_COUNT:number = Crom_l1_composedPackageLiterals.RELATIONSHIPCONSTRAINT_FEATURE_COUNT + 2;
	public static INTERRELATIONSHIPCONSTRAINT_OPERATION_COUNT:number = Crom_l1_composedPackageLiterals.RELATIONSHIPCONSTRAINT_OPERATION_COUNT + 0;

	public static INTER_RELATIONSHIP_CONSTRAINT__FIRST:number = 0;
	public static INTER_RELATIONSHIP_CONSTRAINT__SECOND:number = 1;

	public static COMPLEXCONSTRAINT:number = 23;
	public static COMPLEXCONSTRAINT_FEATURE_COUNT:number = Crom_l1_composedPackageLiterals.CONSTRAINT_FEATURE_COUNT + 2;
	public static COMPLEXCONSTRAINT_OPERATION_COUNT:number = Crom_l1_composedPackageLiterals.CONSTRAINT_OPERATION_COUNT + 0;

	public static COMPLEX_CONSTRAINT__TARGETS:number = 0;
	public static COMPLEX_CONSTRAINT__EXPRESSION:number = 1;

	public static DATAINHERITANCE:number = 24;
	public static DATAINHERITANCE_FEATURE_COUNT:number = Crom_l1_composedPackageLiterals.INHERITANCE_FEATURE_COUNT + 2;
	public static DATAINHERITANCE_OPERATION_COUNT:number = Crom_l1_composedPackageLiterals.INHERITANCE_OPERATION_COUNT + 0;

	public static DATA_INHERITANCE__SUPER:number = 0;
	public static DATA_INHERITANCE__SUB:number = 1;

	public static NATURALINHERITANCE:number = 25;
	public static NATURALINHERITANCE_FEATURE_COUNT:number = Crom_l1_composedPackageLiterals.INHERITANCE_FEATURE_COUNT + 2;
	public static NATURALINHERITANCE_OPERATION_COUNT:number = Crom_l1_composedPackageLiterals.INHERITANCE_OPERATION_COUNT + 0;

	public static NATURAL_INHERITANCE__SUPER:number = 0;
	public static NATURAL_INHERITANCE__SUB:number = 1;

	public static COMPARTMENTINHERITANCE:number = 26;
	public static COMPARTMENTINHERITANCE_FEATURE_COUNT:number = Crom_l1_composedPackageLiterals.INHERITANCE_FEATURE_COUNT + 2;
	public static COMPARTMENTINHERITANCE_OPERATION_COUNT:number = Crom_l1_composedPackageLiterals.INHERITANCE_OPERATION_COUNT + 0;

	public static COMPARTMENT_INHERITANCE__SUPER:number = 0;
	public static COMPARTMENT_INHERITANCE__SUB:number = 1;

	public static ROLEINHERITANCE:number = 27;
	public static ROLEINHERITANCE_FEATURE_COUNT:number = Crom_l1_composedPackageLiterals.INHERITANCE_FEATURE_COUNT + 2;
	public static ROLEINHERITANCE_OPERATION_COUNT:number = Crom_l1_composedPackageLiterals.INHERITANCE_OPERATION_COUNT + 0;

	public static ROLE_INHERITANCE__SUPER:number = 0;
	public static ROLE_INHERITANCE__SUB:number = 1;

	public static PLACE:number = 28;
	public static PLACE_FEATURE_COUNT:number = 3;
	public static PLACE_OPERATION_COUNT:number = 0;

	public static PLACE__LOWER:number = 0;
	public static PLACE__UPPER:number = 1;
	public static PLACE__HOLDER:number = 2;

	public static RELATIONSHIPIMPLICATION:number = 31;
	public static RELATIONSHIPIMPLICATION_FEATURE_COUNT:number = Crom_l1_composedPackageLiterals.INTERRELATIONSHIPCONSTRAINT_FEATURE_COUNT + 0;
	public static RELATIONSHIPIMPLICATION_OPERATION_COUNT:number = Crom_l1_composedPackageLiterals.INTERRELATIONSHIPCONSTRAINT_OPERATION_COUNT + 0;

	public static RELATIONSHIP_IMPLICATION__FIRST:number = 0;
	public static RELATIONSHIP_IMPLICATION__SECOND:number = 1;

	public static RELATIONSHIPEXCLUSION:number = 32;
	public static RELATIONSHIPEXCLUSION_FEATURE_COUNT:number = Crom_l1_composedPackageLiterals.INTERRELATIONSHIPCONSTRAINT_FEATURE_COUNT + 0;
	public static RELATIONSHIPEXCLUSION_OPERATION_COUNT:number = Crom_l1_composedPackageLiterals.INTERRELATIONSHIPCONSTRAINT_OPERATION_COUNT + 0;

	public static RELATIONSHIP_EXCLUSION__FIRST:number = 0;
	public static RELATIONSHIP_EXCLUSION__SECOND:number = 1;

	public static IRREFLEXIVE:number = 34;
	public static IRREFLEXIVE_FEATURE_COUNT:number = Crom_l1_composedPackageLiterals.INTRARELATIONSHIPCONSTRAINT_FEATURE_COUNT + 0;
	public static IRREFLEXIVE_OPERATION_COUNT:number = Crom_l1_composedPackageLiterals.INTRARELATIONSHIPCONSTRAINT_OPERATION_COUNT + 0;

	public static IRREFLEXIVE__RELATION:number = 0;

	public static CYCLIC:number = 35;
	public static CYCLIC_FEATURE_COUNT:number = Crom_l1_composedPackageLiterals.INTRARELATIONSHIPCONSTRAINT_FEATURE_COUNT + 0;
	public static CYCLIC_OPERATION_COUNT:number = Crom_l1_composedPackageLiterals.INTRARELATIONSHIPCONSTRAINT_OPERATION_COUNT + 0;

	public static CYCLIC__RELATION:number = 0;

	public static TOTAL:number = 36;
	public static TOTAL_FEATURE_COUNT:number = Crom_l1_composedPackageLiterals.INTRARELATIONSHIPCONSTRAINT_FEATURE_COUNT + 0;
	public static TOTAL_OPERATION_COUNT:number = Crom_l1_composedPackageLiterals.INTRARELATIONSHIPCONSTRAINT_OPERATION_COUNT + 0;

	public static TOTAL__RELATION:number = 0;

	public static ACYCLIC:number = 37;
	public static ACYCLIC_FEATURE_COUNT:number = Crom_l1_composedPackageLiterals.INTRARELATIONSHIPCONSTRAINT_FEATURE_COUNT + 0;
	public static ACYCLIC_OPERATION_COUNT:number = Crom_l1_composedPackageLiterals.INTRARELATIONSHIPCONSTRAINT_OPERATION_COUNT + 0;

	public static ACYCLIC__RELATION:number = 0;

	public static REFLEXIVE:number = 38;
	public static REFLEXIVE_FEATURE_COUNT:number = Crom_l1_composedPackageLiterals.INTRARELATIONSHIPCONSTRAINT_FEATURE_COUNT + 0;
	public static REFLEXIVE_OPERATION_COUNT:number = Crom_l1_composedPackageLiterals.INTRARELATIONSHIPCONSTRAINT_OPERATION_COUNT + 0;

	public static REFLEXIVE__RELATION:number = 0;

	public static ROLEGROUP:number = 40;
	public static ROLEGROUP_FEATURE_COUNT:number = Crom_l1_composedPackageLiterals.ABSTRACTROLE_FEATURE_COUNT + Crom_l1_composedPackageLiterals.RELATIONTARGET_FEATURE_COUNT + 3;
	public static ROLEGROUP_OPERATION_COUNT:number = Crom_l1_composedPackageLiterals.ABSTRACTROLE_OPERATION_COUNT + Crom_l1_composedPackageLiterals.RELATIONTARGET_OPERATION_COUNT + 0;

	public static ROLE_GROUP__NAME:number = 0;
	public static ROLE_GROUP__INCOMING:number = 1;
	public static ROLE_GROUP__OUTGOING:number = 2;
	public static ROLE_GROUP__LOWER:number = 3;
	public static ROLE_GROUP__UPPER:number = 4;
	public static ROLE_GROUP__ELEMENTS:number = 5;

	public static ROLEIMPLICATION:number = 41;
	public static ROLEIMPLICATION_FEATURE_COUNT:number = Crom_l1_composedPackageLiterals.ROLECONSTRAINT_FEATURE_COUNT + 0;
	public static ROLEIMPLICATION_OPERATION_COUNT:number = Crom_l1_composedPackageLiterals.ROLECONSTRAINT_OPERATION_COUNT + 0;

	public static ROLE_IMPLICATION__FIRST:number = 0;
	public static ROLE_IMPLICATION__SECOND:number = 1;

	public static ROLEEQUIVALENCE:number = 42;
	public static ROLEEQUIVALENCE_FEATURE_COUNT:number = Crom_l1_composedPackageLiterals.ROLECONSTRAINT_FEATURE_COUNT + 0;
	public static ROLEEQUIVALENCE_OPERATION_COUNT:number = Crom_l1_composedPackageLiterals.ROLECONSTRAINT_OPERATION_COUNT + 0;

	public static ROLE_EQUIVALENCE__FIRST:number = 0;
	public static ROLE_EQUIVALENCE__SECOND:number = 1;

	public static ROLEPROHIBITION:number = 43;
	public static ROLEPROHIBITION_FEATURE_COUNT:number = Crom_l1_composedPackageLiterals.ROLECONSTRAINT_FEATURE_COUNT + 0;
	public static ROLEPROHIBITION_OPERATION_COUNT:number = Crom_l1_composedPackageLiterals.ROLECONSTRAINT_OPERATION_COUNT + 0;

	public static ROLE_PROHIBITION__FIRST:number = 0;
	public static ROLE_PROHIBITION__SECOND:number = 1;

	public static PART:number = 44;
	public static PART_FEATURE_COUNT:number = 4;
	public static PART_OPERATION_COUNT:number = 0;

	public static PART__WHOLE:number = 0;
	public static PART__LOWER:number = 1;
	public static PART__UPPER:number = 2;
	public static PART__ROLE:number = 3;

	public static PARTHOODCONSTRAINT:number = 46;
	public static PARTHOODCONSTRAINT_FEATURE_COUNT:number = Crom_l1_composedPackageLiterals.INTRARELATIONSHIPCONSTRAINT_FEATURE_COUNT + 1;
	public static PARTHOODCONSTRAINT_OPERATION_COUNT:number = Crom_l1_composedPackageLiterals.INTRARELATIONSHIPCONSTRAINT_OPERATION_COUNT + 0;

	public static PARTHOOD_CONSTRAINT__RELATION:number = 0;
	public static PARTHOOD_CONSTRAINT__KIND:number = 1;

	public static ABSTRACTROLEREF:number = 48;
	public static ABSTRACTROLEREF_FEATURE_COUNT:number = Crom_l1_composedPackageLiterals.ROLEGROUPELEMENT_FEATURE_COUNT + 1;
	public static ABSTRACTROLEREF_OPERATION_COUNT:number = Crom_l1_composedPackageLiterals.ROLEGROUPELEMENT_OPERATION_COUNT + 0;

	public static ABSTRACT_ROLE_REF__REF:number = 0;

	public static DIRECTION:number = 29;

	public static PARTHOOD:number = 30;

}
