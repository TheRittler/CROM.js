import {RelationImpl} from "crom_l1_composed/RelationImpl";
import {IntraRelationshipConstraint} from "crom_l1_composed/IntraRelationshipConstraint";
import {Crom_l1_composedPackageLiterals} from "crom_l1_composed/Crom_l1_composedPackageLiterals";
import {Relationship} from "crom_l1_composed/Relationship";
import {Direction} from "crom_l1_composed/Direction";
import {Place} from "crom_l1_composed/Place";
import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {Set} from "ecore/Set";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {AbstractCollection} from "ecore/AbstractCollection";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
		
			export class RelationshipBase
			extends RelationImpl
			implements Relationship
			{
				private _name:string = '';
				get name():string{
					return this._name;
				}
				set name(value:string){
					this._name = value; 
				}
				private _direction:Direction = Direction.UNDIRECTED;
				get direction():Direction{
					return this._direction;
				}
				set direction(value:Direction){
					this._direction = value; 
				}
				private _first:Place = null;
				get first():Place{
				
					return this._first;
				}
				set first(value:Place) {
					if (value != this._first) {
						let msgs:NotificationChain = null;
						if (this._first != null){
							msgs = (this._first).eInverseRemove(this, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - Crom_l1_composedPackageLiterals.RELATIONSHIP__FIRST, /*null*/ null , msgs);
						}
						if (value != null){
							msgs = value.eInverseAdd(this, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - Crom_l1_composedPackageLiterals.RELATIONSHIP__FIRST, /*null*/ null, msgs);
						}
						msgs = this.basicSetFirst(value, msgs);
						if (msgs != null) {
							msgs.dispatch();
						}
					}
					else if (this.eNotificationRequired()){
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,Crom_l1_composedPackageLiterals.RELATIONSHIP__FIRST , value, value));
					}
				}
				private _second:Place = null;
				get second():Place{
				
					return this._second;
				}
				set second(value:Place) {
					if (value != this._second) {
						let msgs:NotificationChain = null;
						if (this._second != null){
							msgs = (this._second).eInverseRemove(this, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - Crom_l1_composedPackageLiterals.RELATIONSHIP__SECOND, /*null*/ null , msgs);
						}
						if (value != null){
							msgs = value.eInverseAdd(this, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - Crom_l1_composedPackageLiterals.RELATIONSHIP__SECOND, /*null*/ null, msgs);
						}
						msgs = this.basicSetSecond(value, msgs);
						if (msgs != null) {
							msgs.dispatch();
						}
					}
					else if (this.eNotificationRequired()){
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,Crom_l1_composedPackageLiterals.RELATIONSHIP__SECOND , value, value));
					}
				}
				private _tr_constraints:Set<IntraRelationshipConstraint> = null;
				
				get tr_constraints():Set<IntraRelationshipConstraint>{
					if(this._tr_constraints===null){
						this._tr_constraints = new Set<IntraRelationshipConstraint>(this, Crom_l1_composedPackageLiterals.RELATIONSHIP__TR_CONSTRAINTS, BasicEObjectImpl.EOPPOSITE_FEATURE_BASE - Crom_l1_composedPackageLiterals.RELATIONSHIP__TR_CONSTRAINTS);
							
					}
					return this._tr_constraints;
					
				}
				
				

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return RelationshipBase.eStaticClass;
				}
			
			
				public basicSetFirst(newobj:Place, msgs:NotificationChain):NotificationChain {
					let oldobj = this._first;
					this._first = newobj;
					if (this.eNotificationRequired()) {
						let notification = new ENotificationImpl(this, NotificationImpl.SET, Crom_l1_composedPackageLiterals.RELATIONSHIP__FIRST, oldobj, newobj);
						if (msgs == null){
							msgs = notification;
						}
						else{
							msgs.add(notification);
						}
					}
					return msgs;
				}
				public basicSetSecond(newobj:Place, msgs:NotificationChain):NotificationChain {
					let oldobj = this._second;
					this._second = newobj;
					if (this.eNotificationRequired()) {
						let notification = new ENotificationImpl(this, NotificationImpl.SET, Crom_l1_composedPackageLiterals.RELATIONSHIP__SECOND, oldobj, newobj);
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
						case Crom_l1_composedPackageLiterals.RELATIONSHIP__NAME:
							return this.name;
						case Crom_l1_composedPackageLiterals.RELATIONSHIP__FIRST:
							return this.first;
						case Crom_l1_composedPackageLiterals.RELATIONSHIP__SECOND:
							return this.second;
						case Crom_l1_composedPackageLiterals.RELATIONSHIP__DIRECTION:
							return this.direction;
						case Crom_l1_composedPackageLiterals.RELATIONSHIP__TR_CONSTRAINTS:
							return this.tr_constraints;
					}
					//return this.eGetFromRelation(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case Crom_l1_composedPackageLiterals.RELATIONSHIP__NAME:
							this.name = <string> newValue;
							return;
						case Crom_l1_composedPackageLiterals.RELATIONSHIP__DIRECTION:
							this.direction = <Direction> newValue;
							return;
						case Crom_l1_composedPackageLiterals.RELATIONSHIP__FIRST:
							this.first = <Place> newValue;
							return;
						case Crom_l1_composedPackageLiterals.RELATIONSHIP__SECOND:
							this.second = <Place> newValue;
							return;
						case Crom_l1_composedPackageLiterals.RELATIONSHIP__TR_CONSTRAINTS:
							this.tr_constraints.clear();
							this.tr_constraints.addAll(newValue);
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				public eBaseStructuralFeatureID(derivedFeatureID:number, baseClass:Function):number {
					return super.eBaseStructuralFeatureID(derivedFeatureID, baseClass);
				}
				
				public eDerivedStructuralFeatureID_number_Function(baseFeatureID:number, baseClass:Function):number {
					return super.eDerivedStructuralFeatureID_number_Function(baseFeatureID, baseClass);
				}
				
			}
			
