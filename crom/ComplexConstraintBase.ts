import {Crom_l1_composedPackageLiterals} from "crom_l1_composed/Crom_l1_composedPackageLiterals";
import {ConstraintImpl} from "crom_l1_composed/ConstraintImpl";
import {AbstractRole} from "crom_l1_composed/AbstractRole";
import {ComplexConstraint} from "crom_l1_composed/ComplexConstraint";
import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {Set} from "ecore/Set";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {AbstractCollection} from "ecore/AbstractCollection";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
		
			export class ComplexConstraintBase
			extends ConstraintImpl
			implements ComplexConstraint
			{
				private _expression:string = '';
				get expression():string{
					return this._expression;
				}
				set expression(value:string){
					this._expression = value; 
				}
				private _targets:Set<AbstractRole> = null;
				
				get targets():Set<AbstractRole>{
					if(this._targets===null){
						this._targets = new Set<AbstractRole>(this, Crom_l1_composedPackageLiterals.COMPLEX_CONSTRAINT__TARGETS, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - Crom_l1_composedPackageLiterals.COMPLEX_CONSTRAINT__TARGETS);
							
					}
					return this._targets;
					
				}
				
				

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return ComplexConstraintBase.eStaticClass;
				}
			
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case Crom_l1_composedPackageLiterals.COMPLEX_CONSTRAINT__TARGETS:
							return this.targets;
						case Crom_l1_composedPackageLiterals.COMPLEX_CONSTRAINT__EXPRESSION:
							return this.expression;
					}
					//return this.eGetFromConstraint(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case Crom_l1_composedPackageLiterals.COMPLEX_CONSTRAINT__EXPRESSION:
							this.expression = <string> newValue;
							return;
						case Crom_l1_composedPackageLiterals.COMPLEX_CONSTRAINT__TARGETS:
							this.targets.clear();
							this.targets.addAll(newValue);
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
