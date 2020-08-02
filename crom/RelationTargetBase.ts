import {Relation} from "crom_l1_composed/Relation";
import {Crom_l1_composedPackageLiterals} from "crom_l1_composed/Crom_l1_composedPackageLiterals";
import {RelationTarget} from "crom_l1_composed/RelationTarget";
import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {Set} from "ecore/Set";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {AbstractCollection} from "ecore/AbstractCollection";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
		
			export class RelationTargetBase
			extends BasicEObjectImpl
			implements RelationTarget
			{
				private _name:string = '';
				get name():string{
					return this._name;
				}
				set name(value:string){
					this._name = value; 
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
				
				

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return RelationTargetBase.eStaticClass;
				}
			
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case Crom_l1_composedPackageLiterals.RELATION_TARGET__NAME:
							return this.name;
						case Crom_l1_composedPackageLiterals.RELATION_TARGET__INCOMING:
							return this.incoming;
						case Crom_l1_composedPackageLiterals.RELATION_TARGET__OUTGOING:
							return this.outgoing;
					}
					//return this.eGetFromNamedElement(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case Crom_l1_composedPackageLiterals.RELATION_TARGET__NAME:
							this.name = <string> newValue;
							return;
						case Crom_l1_composedPackageLiterals.RELATION_TARGET__INCOMING:
							this.incoming.clear();
							this.incoming.addAll(newValue);
							return;
						case Crom_l1_composedPackageLiterals.RELATION_TARGET__OUTGOING:
							this.outgoing.clear();
							this.outgoing.addAll(newValue);
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
