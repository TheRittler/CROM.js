import {ModelElement} from "crom_l1_composed/ModelElement";
import {Relation} from "crom_l1_composed/Relation";
import {Crom_l1_composedPackageLiterals} from "crom_l1_composed/Crom_l1_composedPackageLiterals";
import {Model} from "crom_l1_composed/Model";
import {EClass} from "ecore/EClass";
import {Set} from "ecore/Set";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {AbstractCollection} from "ecore/AbstractCollection";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
		
			export class ModelBase
			extends BasicEObjectImpl
			implements Model
			{
				private _elements:Set<ModelElement> = null;
				
				get elements():Set<ModelElement>{
					if(this._elements===null){
						this._elements = new Set<ModelElement>(this, Crom_l1_composedPackageLiterals.MODEL__ELEMENTS, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - Crom_l1_composedPackageLiterals.MODEL__ELEMENTS);
							
					}
					return this._elements;
					
				}
				
				
				private _relations:Set<Relation> = null;
				
				get relations():Set<Relation>{
					if(this._relations===null){
						this._relations = new Set<Relation>(this, Crom_l1_composedPackageLiterals.MODEL__RELATIONS, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - Crom_l1_composedPackageLiterals.MODEL__RELATIONS);
							
					}
					return this._relations;
					
				}
				
				

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return ModelBase.eStaticClass;
				}
			
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case Crom_l1_composedPackageLiterals.MODEL__ELEMENTS:
							return this.elements;
						case Crom_l1_composedPackageLiterals.MODEL__RELATIONS:
							return this.relations;
					}
					//return this.eGetFromBasicEObjectImpl(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case Crom_l1_composedPackageLiterals.MODEL__ELEMENTS:
							this.elements.clear();
							this.elements.addAll(newValue);
							return;
						case Crom_l1_composedPackageLiterals.MODEL__RELATIONS:
							this.relations.clear();
							this.relations.addAll(newValue);
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
