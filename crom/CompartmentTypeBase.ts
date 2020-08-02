import {CompartmentType} from "crom_l1_composed/CompartmentType";
import {Fulfillment} from "crom_l1_composed/Fulfillment";
import {Crom_l1_composedPackageLiterals} from "crom_l1_composed/Crom_l1_composedPackageLiterals";
import {Constraint} from "crom_l1_composed/Constraint";
import {Part} from "crom_l1_composed/Part";
import {Relationship} from "crom_l1_composed/Relationship";
import {RigidTypeImpl} from "crom_l1_composed/RigidTypeImpl";
import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {Set} from "ecore/Set";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {AbstractCollection} from "ecore/AbstractCollection";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
		
			export class CompartmentTypeBase
			extends RigidTypeImpl
			implements CompartmentType
			{
				private _parts:Set<Part> = null;
				
				get parts():Set<Part>{
					if(this._parts===null){
						this._parts = new Set<Part>(this, Crom_l1_composedPackageLiterals.COMPARTMENT_TYPE__PARTS, Crom_l1_composedPackageLiterals.PART__WHOLE);
							
					}
					return this._parts;
					
				}
				
				
				private _relationships:OrderedSet<Relationship> = null;
				
				get relationships():OrderedSet<Relationship>{
					if(this._relationships===null){
						this._relationships = new OrderedSet<Relationship>(this, Crom_l1_composedPackageLiterals.COMPARTMENT_TYPE__RELATIONSHIPS, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - Crom_l1_composedPackageLiterals.COMPARTMENT_TYPE__RELATIONSHIPS);
							
					}
					return this._relationships;
					
				}
				
				
				private _constraints:OrderedSet<Constraint> = null;
				
				get constraints():OrderedSet<Constraint>{
					if(this._constraints===null){
						this._constraints = new OrderedSet<Constraint>(this, Crom_l1_composedPackageLiterals.COMPARTMENT_TYPE__CONSTRAINTS, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - Crom_l1_composedPackageLiterals.COMPARTMENT_TYPE__CONSTRAINTS);
							
					}
					return this._constraints;
					
				}
				
				
				private _tr_extends:CompartmentType = null;
				get tr_extends():CompartmentType{
				
					return this._tr_extends;
				}
				set tr_extends(value:CompartmentType) {
					let oldvalue = this._tr_extends;
					this._tr_extends = value;
					if (this.eNotificationRequired()){
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,Crom_l1_composedPackageLiterals.COMPARTMENT_TYPE__TR_EXTENDS , oldvalue, value));
					}
				}
				private _contains:OrderedSet<CompartmentType> = null;
				
				get contains():OrderedSet<CompartmentType>{
					if(this._contains===null){
						this._contains = new OrderedSet<CompartmentType>(this, Crom_l1_composedPackageLiterals.COMPARTMENT_TYPE__CONTAINS, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - Crom_l1_composedPackageLiterals.COMPARTMENT_TYPE__CONTAINS);
							
					}
					return this._contains;
					
				}
				
				
				private _fulfillments:OrderedSet<Fulfillment> = null;
				
				get fulfillments():OrderedSet<Fulfillment>{
					if(this._fulfillments===null){
						this._fulfillments = new OrderedSet<Fulfillment>(this, Crom_l1_composedPackageLiterals.COMPARTMENT_TYPE__FULFILLMENTS, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - Crom_l1_composedPackageLiterals.COMPARTMENT_TYPE__FULFILLMENTS);
							
					}
					return this._fulfillments;
					
				}
				
				

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return CompartmentTypeBase.eStaticClass;
				}
			
				public eInverseAdd(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain): NotificationChain{
					switch (featureID) {
						case Crom_l1_composedPackageLiterals.COMPARTMENT_TYPE__PARTS:
							return this.parts.basicAdd(otherEnd as Part, msgs);
					}
					//return this.eInverseAddFromRigidType(otherEnd, featureID, msgs);
					return super.eInverseAdd(otherEnd, featureID, msgs);
				}
				//public eInverseAddFromCompartmentType = this.eInverseAdd;
				
				public eInverseRemove(otherEnd:InternalEObject, featureID:number, msgs:NotificationChain):NotificationChain{
					switch (featureID) {
						case Crom_l1_composedPackageLiterals.COMPARTMENT_TYPE__PARTS:
							return this.parts.basicRemove(otherEnd as Part, msgs);
					}
					//return this.eInverseRemoveFromRigidType(otherEnd, featureID, msgs);
					return super.eInverseRemove(otherEnd, featureID, msgs);
				}
				
				//public eInverseRemoveFromCompartmentType = this.eInverseRemove;
			
				public basicSetTr_extends(newobj:CompartmentType, msgs:NotificationChain):NotificationChain {
					let oldobj = this._tr_extends;
					this._tr_extends = newobj;
					if (this.eNotificationRequired()) {
						let notification = new ENotificationImpl(this, NotificationImpl.SET, Crom_l1_composedPackageLiterals.COMPARTMENT_TYPE__TR_EXTENDS, oldobj, newobj);
						if (msgs == null){
							msgs = notification;
						}
						else{
							msgs.add(notification);
						}
					}
					return msgs;
				}
				
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case Crom_l1_composedPackageLiterals.COMPARTMENT_TYPE__NAME:
							return this.name;
						case Crom_l1_composedPackageLiterals.COMPARTMENT_TYPE__INCOMING:
							return this.incoming;
						case Crom_l1_composedPackageLiterals.COMPARTMENT_TYPE__OUTGOING:
							return this.outgoing;
						case Crom_l1_composedPackageLiterals.COMPARTMENT_TYPE__ATTRIBUTES:
							return this.attributes;
						case Crom_l1_composedPackageLiterals.COMPARTMENT_TYPE__OPERATIONS:
							return this.operations;
						case Crom_l1_composedPackageLiterals.COMPARTMENT_TYPE__PARTS:
							return this.parts;
						case Crom_l1_composedPackageLiterals.COMPARTMENT_TYPE__RELATIONSHIPS:
							return this.relationships;
						case Crom_l1_composedPackageLiterals.COMPARTMENT_TYPE__CONSTRAINTS:
							return this.constraints;
						case Crom_l1_composedPackageLiterals.COMPARTMENT_TYPE__TR_EXTENDS:
							return this.tr_extends;
						case Crom_l1_composedPackageLiterals.COMPARTMENT_TYPE__CONTAINS:
							return this.contains;
						case Crom_l1_composedPackageLiterals.COMPARTMENT_TYPE__FULFILLMENTS:
							return this.fulfillments;
					}
					//return this.eGetFromRigidType(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case Crom_l1_composedPackageLiterals.COMPARTMENT_TYPE__PARTS:
							this.parts.clear();
							this.parts.addAll(newValue);
							return;
						case Crom_l1_composedPackageLiterals.COMPARTMENT_TYPE__RELATIONSHIPS:
							this.relationships.clear();
							this.relationships.addAll(newValue);
							return;
						case Crom_l1_composedPackageLiterals.COMPARTMENT_TYPE__CONSTRAINTS:
							this.constraints.clear();
							this.constraints.addAll(newValue);
							return;
						case Crom_l1_composedPackageLiterals.COMPARTMENT_TYPE__TR_EXTENDS:
							this.tr_extends = <CompartmentType> newValue;
							return;
						case Crom_l1_composedPackageLiterals.COMPARTMENT_TYPE__CONTAINS:
							this.contains.clear();
							this.contains.addAll(newValue);
							return;
						case Crom_l1_composedPackageLiterals.COMPARTMENT_TYPE__FULFILLMENTS:
							this.fulfillments.clear();
							this.fulfillments.addAll(newValue);
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
