import {Relation} from "crom_l1_composed/Relation";
import {Crom_l1_composedPackageLiterals} from "crom_l1_composed/Crom_l1_composedPackageLiterals";
import {RoleGroupElement} from "crom_l1_composed/RoleGroupElement";
import {RoleGroup} from "crom_l1_composed/RoleGroup";
import {RelationTargetImpl} from "crom_l1_composed/RelationTargetImpl";
import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {Set} from "ecore/Set";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {AbstractCollection} from "ecore/AbstractCollection";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
		
			export class RoleGroupBase
			extends BasicEObjectImpl
			implements RoleGroup
			{
				private _name:string = '';
				get name():string{
					return this._name;
				}
				set name(value:string){
					this._name = value; 
				}
				private _lower:number = 0;
				get lower():number{
					return this._lower;
				}
				set lower(value:number){
					this._lower = value; 
				}
				private _upper:number = 0;
				get upper():number{
					return this._upper;
				}
				set upper(value:number){
					this._upper = value; 
				}
				private _incoming:Set<Relation> = null;
				
				get incoming():Set<Relation>{
					if(this._incoming===null){
						this._incoming = new Set<Relation>(this, Crom_l1_composedPackageLiterals.RELATION_TARGET__INCOMING, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - Crom_l1_composedPackageLiterals.RELATION_TARGET__INCOMING);
							
					}
					return this._incoming;
					
				}
				
				
				private _outgoing:Set<Relation> = null;
				
				get outgoing():Set<Relation>{
					if(this._outgoing===null){
						this._outgoing = new Set<Relation>(this, Crom_l1_composedPackageLiterals.RELATION_TARGET__OUTGOING, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - Crom_l1_composedPackageLiterals.RELATION_TARGET__OUTGOING);
							
					}
					return this._outgoing;
					
				}
				
				
				private _elements:Set<RoleGroupElement> = null;
				
				get elements():Set<RoleGroupElement>{
					if(this._elements===null){
						this._elements = new Set<RoleGroupElement>(this, Crom_l1_composedPackageLiterals.ROLE_GROUP__ELEMENTS, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - Crom_l1_composedPackageLiterals.ROLE_GROUP__ELEMENTS);
							
					}
					return this._elements;
					
				}
				
				

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return RoleGroupBase.eStaticClass;
				}
			
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case Crom_l1_composedPackageLiterals.ROLE_GROUP__NAME:
							return this.name;
						case Crom_l1_composedPackageLiterals.ROLE_GROUP__INCOMING:
							return this.incoming;
						case Crom_l1_composedPackageLiterals.ROLE_GROUP__OUTGOING:
							return this.outgoing;
						case Crom_l1_composedPackageLiterals.ROLE_GROUP__LOWER:
							return this.lower;
						case Crom_l1_composedPackageLiterals.ROLE_GROUP__UPPER:
							return this.upper;
						case Crom_l1_composedPackageLiterals.ROLE_GROUP__ELEMENTS:
							return this.elements;
					}
					//return this.eGetFromAbstractRole(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case Crom_l1_composedPackageLiterals.ROLE_GROUP__NAME:
							this.name = <string> newValue;
							return;
						case Crom_l1_composedPackageLiterals.ROLE_GROUP__LOWER:
							this.lower = <number> newValue;
							return;
						case Crom_l1_composedPackageLiterals.ROLE_GROUP__UPPER:
							this.upper = <number> newValue;
							return;
						case Crom_l1_composedPackageLiterals.ROLE_GROUP__INCOMING:
							this.incoming.clear();
							this.incoming.addAll(newValue);
							return;
						case Crom_l1_composedPackageLiterals.ROLE_GROUP__OUTGOING:
							this.outgoing.clear();
							this.outgoing.addAll(newValue);
							return;
						case Crom_l1_composedPackageLiterals.ROLE_GROUP__ELEMENTS:
							this.elements.clear();
							this.elements.addAll(newValue);
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				public eBaseStructuralFeatureID(derivedFeatureID:number, baseClass:Function):number {
					if (baseClass === RelationTargetImpl) {
						switch (derivedFeatureID) {
							case Crom_l1_composedPackageLiterals.ROLE_GROUP__INCOMING: return Crom_l1_composedPackageLiterals.RELATION_TARGET__INCOMING;
							case Crom_l1_composedPackageLiterals.ROLE_GROUP__OUTGOING: return Crom_l1_composedPackageLiterals.RELATION_TARGET__OUTGOING;
							default: return -1;
						}
					}
					return super.eBaseStructuralFeatureID(derivedFeatureID, baseClass);
				}
				
				public eDerivedStructuralFeatureID_number_Function(baseFeatureID:number, baseClass:Function):number {
					if (baseClass === RelationTargetImpl) {
						switch (baseFeatureID) {
							case Crom_l1_composedPackageLiterals.RELATION_TARGET__INCOMING: return Crom_l1_composedPackageLiterals.ROLE_GROUP__INCOMING;
							case Crom_l1_composedPackageLiterals.RELATION_TARGET__OUTGOING: return Crom_l1_composedPackageLiterals.ROLE_GROUP__OUTGOING;
							default: return -1;
						}
					}
					return super.eDerivedStructuralFeatureID_number_Function(baseFeatureID, baseClass);
				}
				
			}
			
