import{a as Ha}from"./chunk-ZGEJ7KGT.mjs";import{$ as Zo,A as yo,B as co,C as lo,D as No,E as bo,F as So,G as go,H as xo,I as Eo,J as Io,K as Po,L as vo,M as To,N as Do,O as ko,P as Ro,Q as Lo,R as Ao,S as ho,T as Co,U as Ko,V as Wo,W as Mo,X as Bo,Y as wo,Z as jo,_ as Fo,a as Ga,aa as qo,b as Ya,ba as _o,c as $a,ca as Oo,d as Ja,da as Uo,e as Qa,ea as zo,f as Xa,fa as Vo,g as to,ga as Ho,h as eo,ha as Go,i as N,ia as Yo,j as b,ja as $o,k as ao,ka as Jo,l as oo,la as Qo,m as io,ma as Xo,n as ro,na as ti,o as no,oa as ei,p as r,pa as ai,q as n,qa as oi,r as so,ra as ii,s as fo,t as uo,ta as ri,u as mo,v as f,w as u,x as c,y as l,z as po}from"./chunk-E4HPEZMZ.mjs";import{TypedEmitter as $i}from"tiny-typed-emitter";var ni=new Map([[$a,[0]],[Ja,[1]],[Qa,[2]],[Xa,[4]],[to,[5]],[eo,[6]],[ro,[7]],[no,[8]],[so,[9]],[uo,[10]],[mo,[11]],[po,[12]],[yo,[13]],[co,[14]],[go,[15]],[Eo,[16]],[Io,[17]],[Po,[18]],[vo,[19]],[To,[20]],[Do,[21]],[ko,[22]],[Ro,[23]],[Lo,[24]],[Ao,[25]],[Co,[26]],[Ko,[27]],[Wo,[28]],[Fo,[29]],[Zo,[30]],[qo,[31]],[Uo,[32]],[zo,[34]],[Vo,[35]],[Ho,[36]],[Go,[37]],[Yo,[38]],[$o,[39]],[Jo,[40]],[Qo,[41]],[Xo,[42]],[ei,[43]],[ai,[44]],[oi,[45]],[Bo,[46]],[io,[47]],[ao,[48]],[oo,[49]],[fo,[50]],[ho,[52]],[ti,[51]],[xo,[53]],[Mo,[54]]]);function E(t,a){let e={};return e.points=t.u16(),e.id=t.u32(),e.level=t.u8(),e}function I(t,a){t.u16(a.points),t.u32(a.id),t.u8(a.level)}function Z(t,a){let e={};return e.abilityDataList=t.array(t.u16(),()=>E(t,a),100),e}function q(t,a){t.array(a.abilityDataList,{maxLen:100,lenType:"u16"},e=>{I(t,e)})}var _="AbilityChangeNotify";function si(t,a){let e={};return e.featureType=t.u16(),e.level=t.u32(),e}function fi(t,a){t.u16(a.featureType),t.u32(a.level)}function O(t,a){let e={};return e.activeAbilityList=t.array(t.u16(),()=>si(t,a),60),e.objectId=t.u64(),e}function U(t,a){t.array(a.activeAbilityList,{maxLen:60,lenType:"u16"},e=>{fi(t,e)}),t.u64(a.objectId)}var z="ActiveAbilityNotify";function V(t,a){let e={};return e.objectId=t.u64(),e.addonSkillFeatureList=t.array(t.u16(),()=>{let o={};return o.addonSkillFeatureIdList=t.array(t.u16(),()=>t.u32(),5),o.skillId=t.u32(),o},200),e}function H(t,a){t.u64(a.objectId),t.array(a.addonSkillFeatureList,{maxLen:200,lenType:"u16"},e=>{t.array(e.addonSkillFeatureIdList,{maxLen:5,lenType:"u16"},o=>{t.u32(o)}),t.u32(e.skillId)})}var G="AddonSkillFeatureChangeNotify";function Y(t,a){let e={};return e.paralyzationMaxPoint=t.u32(),e.type=t.u8(),e.objectId=t.u64(),e.paralyzationPoint=t.u32(),e}function $(t,a){t.u32(a.paralyzationMaxPoint),t.u8(a.type),t.u64(a.objectId),t.u32(a.paralyzationPoint)}var J="BlockSkillStateNotify";function Q(t,a){let e={};return e.sourceId=t.u64(),e.targetId=t.u64(),e.type=t.u32(),e}function X(t,a){t.u64(a.sourceId),t.u64(a.targetId),t.u32(a.type)}var tt="CounterAttackNotify";function et(t,a){let e={};return e.sourceId=t.u64(),e.targetId=t.u64(),a>=4?(e.effectId=t.u32(),e.directionYaw=t.u16(),e.deathType=t.u8(),e.durabilityDecrement=t.u8(),e.abnormalStatusType=t.u8(),e.damageAttr=t.u8(),e.unk0_m=t.u64(),e.unk2_m=t.u32()):(e.effectId=0,e.directionYaw=0,e.deathType=0,e.durabilityDecrement=0,e.abnormalStatusType=0,e.damageAttr=0,e.unk0_m=0n,e.unk2_m=0),e}function at(t,a){t.u64(a.sourceId),t.u64(a.targetId),t.u32(a.effectId),t.u16(a.directionYaw),t.u8(a.deathType??0),t.u8(a.durabilityDecrement),t.u8(a.abnormalStatusType??0),t.u8(a.damageAttr??0),t.u64(a.unk0_m),t.u32(a.unk2_m)}var ot="DeathNotify";function it(t,a){let e={};return e.abilityDataList=t.array(t.u16(),()=>E(t,a),100),e}function rt(t,a){t.array(a.abilityDataList,{maxLen:100,lenType:"u16"},e=>{I(t,e)})}var nt="InitAbility";function st(t,a){let e={};return e.playerId=t.u64(),e}function ft(t,a){t.u64(a.playerId)}var ut="InitEnv";function m(t,a){let e={};return e.skillLevel=t.u8(),e.occurTime=N(t,a),e.statusEffectId=t.u32(),e.sourceId=t.u64(),e.totalTime=t.f32(),e.endTick=t.u64(),t.bool()&&(e.value=t.bytes(16)),e.effectInstanceId=t.u32(),a>=1?e.stackCount=t.u8():e.stackCount=1,e}function p(t,a){t.u8(a.skillLevel),b(t,a.occurTime),t.u32(a.statusEffectId),t.u64(a.sourceId),t.f32(a.totalTime),t.u64(a.endTick),t.bool(a.value!==void 0)&&t.bytes(a.value,{length:16}),t.u32(a.effectInstanceId),t.u8(a.stackCount)}function mt(t,a){let e={};return e.statPair=t.array(t.u16(),()=>{let o={};return o.StatType=t.u8(),o.Value=r(t,a),o},152),e.name=t.string(20),e.level=t.u16(),e.statusEffectDatas=t.array(t.u16(),()=>m(t,a),80),e.characterId=t.u64(),e.gearLevel=t.f32(),e.playerId=t.u64(),e.classId=t.u16(),e}function pt(t,a){t.array(a.statPair,{maxLen:152,lenType:"u16"},e=>{t.u8(e.statType),n(t,e.value)}),t.string(a.name,20),t.u16(a.level),t.array(a.statusEffectDatas,{maxLen:80,lenType:"u16"},e=>{p(t,e)}),t.u64(a.characterId),t.f32(a.gearLevel),t.u64(a.playerId),t.u16(a.classId)}var yt="InitPC";function ct(t,a){let e={};return e.statPair=t.array(t.u16(),()=>{let o={};return o.statType=t.u8(),o.value=r(t,a),o},152),e.statusEffectDatas=t.array(t.u16(),()=>m(t,a),80),e.addonSkillFeatureList=t.array(t.u16(),()=>{let o={};return o.addonSkillFeatureIdList=t.array(t.u16(),()=>t.u32(),5),o.skillId=t.u32(),o},200),e.abilityDataList=t.array(t.u16(),()=>E(t,a),100),e}function lt(t,a){t.array(a.statPair,{maxLen:152,lenType:"u16"},e=>{t.u8(e.statType),n(t,e.value)}),t.array(a.statusEffectDatas,{maxLen:80,lenType:"u16"},e=>{p(t,e)}),t.array(a.addonSkillFeatureList,{maxLen:200,lenType:"u16"},e=>{t.array(e.addonSkillFeatureIdList,{maxLen:5,lenType:"u16"},o=>{t.u32(o)}),t.u32(e.skillId)}),t.array(a.abilityDataList,{maxLen:100,lenType:"u16"},e=>{I(t,e)})}var dt="InitLocal";function Nt(t,a){let e={};return e.account_CharacterId1=t.u64(),e.serverAddr=t.string(256),e.account_CharacterId2=t.u64(),e}function bt(t,a){t.u64(a.account_CharacterId1),t.string(a.serverAddr,256),t.u64(a.account_CharacterId2)}var St="MigrationExecute";function L(t,a){let e={};return e.spawnIndex=t.u32(),e.objectId=t.u64(),t.bool()&&(e.transitIndex=t.u32()),e.position=f(t,a),e.statusEffectDatas=t.array(t.u16(),()=>m(t,a),80),e.directionYaw=c(t,a),e.statPair=t.array(t.u16(),()=>{let o={};return o.statType=t.u8(),o.value=r(t,a),o},152),e.typeId=t.u32(),a>=1?(e.level=t.u16(),t.bool()&&(e.balanceLevel=t.u16())):e.level=0,e}function A(t,a){t.u32(a.spawnIndex),t.u64(a.objectId),t.bool(a.transitIndex!==void 0)&&t.u32(a.transitIndex),u(t,a.position),t.array(a.statusEffectDatas,{maxLen:80,lenType:"u16"},e=>{p(t,e)}),l(t,a.directionYaw),t.array(a.statPair,{maxLen:152,lenType:"u16"},e=>{t.u8(e.statType),n(t,e.value)}),t.u32(a.typeId),t.u16(a.level),t.bool(a.balanceLevel!==void 0)&&t.u16(a.balanceLevel)}function xt(t,a){let e={};return e.npcStruct=L(t,a),e}function Et(t,a){A(t,a.npcStruct)}var It="NewNpc";function Pt(t,a){let e={};return e.publishReason=t.u8(),e.ownerId=t.u64(),e.npcData=L(t,a),e}function vt(t,a){t.u8(a.publishReason),t.u64(a.ownerId),A(t,a.npcData)}var Tt="NewNpcSummon";function g(t,a){let e={};return e.slot=t.u16(),e.level=t.u16(),e.itemTint=t.bytes(t.u16(),3,14),e.expireTime=N(t),e.id=t.u32(),e}function x(t,a){t.u16(a.slot),t.u16(a.level),t.bytes(a.itemTint,{maxLen:3,lenType:"u16",multiplier:14}),b(t,a.expireTime),t.u32(a.id)}function pi(t,a){let e={};return e.maxItemLevel=t.f32(),e.statPair=t.array(t.u16(),()=>{let o={};return o.statType=t.u8(),o.value=r(t,a),o},152),e.name=t.string(20),e.heading=c(t,a),e.characterId=t.u64(),e.playerId=t.u64(),e.addonSkillFeatureList=t.array(t.u16(),()=>{let o={};return o.addonSkillFeatureIdList=t.array(t.u16(),()=>t.u32(),5),o.skillId=t.u32(),o},200),e.classId=t.u16(),e.level=t.u16(),e.statusEffectDatas=t.array(t.u16(),()=>m(t,a),80),a>=1?(e.avgItemLevel=t.f32(),e.position=f(t),e.equipItemDataList=t.array(t.u16(),()=>g(t,a),32),e.equipLifeToolDataList=t.array(t.u16(),()=>g(t,a),9),e.guildName=t.string(20),a>=2?e.guildId=t.u64():e.guildId=BigInt(t.u32())):(e.avgItemLevel=e.maxItemLevel,e.position={x:0,y:0,z:0},e.equipItemDataList=[],e.equipLifeToolDataList=[],e.guildName="",e.guildId=0n),e}function yi(t,a){t.f32(a.maxItemLevel),t.array(a.statPair,{maxLen:152,lenType:"u16"},e=>{t.u8(e.statType),n(t,e.value)}),t.string(a.name,20),l(t,a.heading),t.u64(a.characterId),t.u64(a.playerId),t.array(a.addonSkillFeatureList,{maxLen:200,lenType:"u16"},e=>{t.array(e.addonSkillFeatureIdList,{maxLen:5,lenType:"u16"},o=>{t.u32(o)}),t.u32(e.skillId)}),t.u16(a.classId),t.u16(a.level),t.array(a.statusEffectDatas,{maxLen:80,lenType:"u16"},e=>{p(t,e)}),t.f32(a.avgItemLevel),u(t,a.position),t.array(a.equipItemDataList,{maxLen:32,lenType:"u16"},e=>{x(t,e)}),t.array(a.equipLifeToolDataList,{maxLen:9,lenType:"u16"},e=>{x(t,e)}),t.string(a.guildName,20),t.u64(a.guildId)}function kt(t,a){let e={};return e.pcStruct=pi(t,a),e}function Rt(t,a){yi(t,a.pcStruct)}var Lt="NewPC";function ci(t,a){let e={};return e.tripodIndex=bo(t,a),e.chainSkillEffect=t.u32(),e.skillEffect=t.u32(),e.skillId=t.u32(),e.targetObjectId=t.u64(),e.ownerId=t.u64(),e.skillLevel=t.u8(),e.projectileId=t.u64(),e.tripodLevel=lo(t,a),e}function li(t,a){So(t,a.tripodIndex),t.u32(a.chainSkillEffect),t.u32(a.skillEffect),t.u32(a.skillId),t.u64(a.targetObjectId),t.u64(a.ownerId),t.u8(a.skillLevel),t.u64(a.projectileId),No(t,a.tripodLevel)}function At(t,a){let e={};return e.projectileInfo=ci(t,a),e}function ht(t,a){li(t,a.projectileInfo)}var Ct="NewProjectile";function Kt(t,a){let e={};return e.enable=t.bool(),e.paralyzationPoint=t.u32(),e.decreasePoint=t.u32(),e.paralyzationMaxPoint=t.u32(),e.noHitCheckTime=t.u32(),e.hitCheckTime=t.u32(),e.objectId=t.u64(),e}function Wt(t,a){t.bool(a.enable),t.u32(a.paralyzationPoint),t.u32(a.decreasePoint),t.u32(a.paralyzationMaxPoint),t.u32(a.noHitCheckTime),t.u32(a.hitCheckTime),t.u64(a.objectId)}var Mt="ParalyzationStateNotify";function di(t,a){let e={};return e.maxHp=r(t,a),e.characterId=t.u64(),e.position=f(t,a),e.transitIndex=t.u32(),e.curHp=r(t,a),e.characterLevel=t.u16(),e.gearLevel=t.f32(),e.zoneId=t.u32(),e.partyMemberNumber=t.u8(),e.name=t.string(20),e.zoneInstId=t.u64(),e.worldId=t.u8(),e.classId=t.u16(),e.auths=t.u8(),e}function Ni(t,a){n(t,a.maxHp),t.u64(a.characterId),u(t,a.position),t.u32(a.transitIndex),n(t,a.curHp),t.u16(a.characterLevel),t.f32(a.gearLevel),t.u32(a.zoneId),t.u8(a.partyMemberNumber),t.string(a.name,20),t.u64(a.zoneInstId),t.u8(a.worldId),t.u16(a.classId),t.u8(a.auths)}function Bt(t,a){let e={};return e.raidInstanceId=t.u32(),e.lootGrade=t.u32(),e.partyType=t.u8(),e.partyInstanceId=t.u32(),e.partyLootType=t.u8(),e.memberDatas=t.array(t.u16(),()=>di(t,a),40),e}function wt(t,a){t.u32(a.raidInstanceId),t.u32(a.lootGrade),t.u8(a.partyType),t.u32(a.partyInstanceId),t.u8(a.partyLootType),t.array(a.memberDatas,{maxLen:40,lenType:"u16"},e=>{Ni(t,e)})}var jt="PartyInfo";function Ft(t,a){let e={};return e.partyLeaveType=t.u8(),e.partyInstanceId=t.u32(),e.name=t.string(20),e}function Zt(t,a){t.u8(a.partyLeaveType),t.u32(a.partyInstanceId),t.string(a.name,20)}var qt="PartyLeaveResult";function _t(t,a){let e={};return e.objectId=t.u64(),e.passiveStatusEffectList=t.array(t.u16(),()=>t.u32(),10),e.unk0_m=t.u8(),e}function Ot(t,a){t.u64(a.objectId),t.array(a.passiveStatusEffectList,{maxLen:10,lenType:"u16"},e=>{t.u32(e)}),t.u8(a.unk0_m)}var Ut="PartyPassiveStatusEffectAddNotify";function zt(t,a){let e={};return e.objectId=t.u64(),e.passiveStatusEffectList=t.array(t.u16(),()=>t.u32(),10),e}function Vt(t,a){t.u64(a.objectId),t.array(a.passiveStatusEffectList,{maxLen:10,lenType:"u16"},e=>{t.u32(e)})}var Ht="PartyPassiveStatusEffectRemoveNotify";function Gt(t,a){let e={};return e.characterId=t.u64(),e.statusEffectDatas=t.array(t.u16(),()=>m(t,a),80),e.playerIdOnRefresh=t.u64(),e}function Yt(t,a){t.u64(a.characterId),t.array(a.statusEffectDatas,{maxLen:80,lenType:"u16"},e=>{p(t,e)}),t.u64(a.playerIdOnRefresh)}var $t="PartyStatusEffectAddNotify";function Jt(t,a){let e={};return e.characterId=t.u64(),e.statusEffectIds=t.array(t.u16(),()=>t.u32(),80),e.reason=t.u8(),e}function Qt(t,a){t.u64(a.characterId),t.array(a.statusEffectIds,{maxLen:80,lenType:"u16"},e=>{t.u32(e)}),t.u8(a.reason)}var Xt="PartyStatusEffectRemoveNotify";function te(t,a){let e={};return e.partyInstanceId=t.u32(),e.raidInstanceId=t.u32(),e.characterId=t.u64(),e}function ee(t,a){t.u32(a.partyInstanceId),t.u32(a.raidInstanceId),t.u64(a.characterId)}var ae="PartyStatusEffectResultNotify";function oe(t,a){let e={};return e.passiveStatusEffectList=t.array(t.u16(),()=>t.u32(),10),e}function ie(t,a){t.array(a.passiveStatusEffectList,{maxLen:10,lenType:"u16"},e=>{t.u32(e)})}var re="PassiveStatusEffectAddNotify";function ne(t,a){let e={};return e.passiveStatusEffectList=t.array(t.u16(),()=>t.u32(),10),e}function se(t,a){t.array(a.passiveStatusEffectList,{maxLen:10,lenType:"u16"},e=>{t.u32(e)})}var fe="PassiveStatusEffectRemoveNotify";function ue(t,a){let e={};return a>=4?e.typeId=t.u32():e.typeId=0,e}function me(t,a){t.u32(a.typeId)}var pe="RaidBossKillNotify";function ye(t,a){let e={};return a>=3?e.raidResult=t.u8():e.raidResult=0,e}function ce(t,a){t.u8(a.raidResult)}var le="RaidResult";function bi(t,a){let e={};return e.unpublishReason=t.u8(),e.objectId=t.u64(),e}function Si(t,a){t.u8(a.unpublishReason),t.u64(a.objectId)}function de(t,a){let e={};return e.unpublishedObjects=t.array(t.u16(),()=>bi(t,a),200),e}function Ne(t,a){t.array(a.unpublishedObjects,{maxLen:200,lenType:"u16"},e=>{Si(t,e)})}var be="RemoveObject";function h(t,a){let e={};return e.modifier=t.u8(),e.targetId=t.u64(),e.damageType=t.u8(),t.bool()&&(e.damageAttr=t.u8()),e.curHp=r(t,a),e.unk3_m=t.u16(),e.maxHp=r(t,a),e.damage=r(t,a),e}function C(t,a){t.u8(a.modifier),t.u64(a.targetId),t.u8(a.damageType),t.bool(a.damageAttr!==void 0)&&t.u8(a.damageAttr),n(t,a.curHp),t.u16(a.unk3_m),n(t,a.maxHp),n(t,a.damage)}function xi(t,a){let e={};return e.skillMoveOptionData=wo(t,a),e.destination=f(t,a),e.position=f(t,a),e.skillDamageEvent=h(t,a),e}function Ei(t,a){jo(t,a.skillMoveOptionData),u(t,a.destination),u(t,a.position),C(t,a.skillDamageEvent)}function Se(t,a){let e={};return e.skillId=t.u32(),e.skillDamageAbnormalMoveEvents=t.array(t.u16(),()=>xi(t,a),50),e.skillEffectId=t.u32(),e.sourceId=t.u64(),e}function ge(t,a){t.u32(a.skillId),t.array(a.skillDamageAbnormalMoveEvents,{maxLen:50,lenType:"u16"},e=>{Ei(t,e)}),t.u32(a.skillEffectId),t.u64(a.sourceId)}var xe="SkillDamageAbnormalMoveNotify";function Ee(t,a){let e={};return e.skillLevel=t.u8(),e.sourceId=t.u64(),e.skillId=t.u32(),e.skillDamageEvents=t.array(t.u16(),()=>h(t,a),50),e.skillEffectId=t.u32(),e}function Ie(t,a){t.u8(a.skillLevel),t.u64(a.sourceId),t.u32(a.skillId),t.array(a.skillDamageEvents,{maxLen:50,lenType:"u16"},e=>{C(t,e)}),t.u32(a.skillEffectId??0)}var Pe="SkillDamageNotify";function ve(t,a){let e={};return e.sourceId=t.u64(),e.skillId=t.u32(),e.stage=t.u8(),e}function Te(t,a){t.u64(a.sourceId),t.u32(a.skillId),t.u8(a.stage)}var De="SkillStageNotify";function ke(t,a){let e={};return e.sourceId=t.u64(),e.curDirectionYaw=c(t,a),e.newDirectionYaw=c(t,a),e.aimTargetPosition=f(t,a),t.bool()&&(e.pitchRotation=c(t,a)),t.bool()&&(e.aiStateId=t.u32()),e.curPosition=f(t,a),t.bool()&&(e.unk1_m=t.u32()),e.skillLevel=t.u8(),e.newPosition=f(t,a),e.skillId=t.u32(),e.skillOptionData=_o(t,a),e}function Re(t,a){t.u64(a.sourceId),l(t,a.curDirectionYaw),l(t,a.newDirectionYaw),u(t,a.aimTargetPosition),t.bool(a.pitchRotation!==void 0)&&l(t,a.pitchRotation),t.bool(a.aiStateId!==void 0)&&t.u32(a.aiStateId),u(t,a.curPosition),t.bool(a.unk1_m!==void 0)&&t.u32(a.unk1_m),t.u8(a.skillLevel),u(t,a.newPosition),t.u32(a.skillId),Oo(t,a.skillOptionData)}var Le="SkillStartNotify";function Ae(t,a){let e={};return e.statusEffectData=m(t,a),e.objectId=t.u64(),e.new=t.bool(),e}function he(t,a){p(t,a.statusEffectData),t.u64(a.objectId),t.bool(a.new)}var Ce="StatusEffectAddNotify";function Ke(t,a){let e={};return e.statusEffectIds=t.array(t.u16(),()=>t.u32(),80),e.objectId=t.u64(),e.reason=t.u8(),e}function We(t,a){t.array(a.statusEffectIds,{maxLen:80,lenType:"u16"},e=>{t.u32(e)}),t.u64(a.objectId),t.u8(a.reason)}var Me="StatusEffectRemoveNotify";function Be(t,a){let e={};return e.effectInstanceId=t.u32(),e.targetId=t.u64(),e.expirationTick=t.u64(),e}function we(t,a){t.u32(a.effectInstanceId),t.u64(a.targetId),t.u64(a.expirationTick)}var je="StatusEffectDurationNotify";function Fe(t,a){let e={};return e.objectId=t.u64(),e.effectInstanceId=t.u32(),e.characterId=t.u64(),e.value=t.u32(),e}function Ze(t,a){t.u64(a.objectId),t.u32(a.effectInstanceId),t.u64(a.characterId),t.u32(a.value)}var qe="StatusEffectSyncDataNotify";function _e(t,a){let e={};return e.step=t.u32(),e.unk2_m=t.bool(),e.triggerId=t.u32(),e}function Oe(t,a){t.u32(a.step),t.bool(a.unk2_m),t.u32(a.triggerId)}var Ue="TriggerBossBattleStatus";function ze(t,a){let e={};return e.packetResultCode=t.u32(),e.triggerId=t.u32(),e.unk0_m=t.u32(),e.involvedPCs=t.array(t.u16(),()=>t.u64(),40),e}function Ve(t,a){t.u32(a.packetResultCode),t.u32(a.triggerId),t.u32(a.unk0_m),t.array(a.involvedPCs,{maxLen:40,lenType:"u16"},e=>{t.u64(e)})}var He="TriggerFinishNotify";function Ge(t,a){let e={};return e.triggerId=t.u32(),e.triggerSignalType=t.u32(),e.sourceId=t.u64(),e.involvedPCs=t.array(t.u16(),()=>t.u64(),40),e}function Ye(t,a){t.u32(a.triggerId),t.u32(a.triggerSignalType),t.u64(a.sourceId),t.array(a.involvedPCs,{maxLen:40,lenType:"u16"},e=>{t.u64(e)})}var $e="TriggerStartNotify";function Je(t,a){let e={};return e.maxHp=r(t,a),e.characterId=t.u64(),e.unk0_m=t.u32(),e.statusEffectDatas=t.array(t.u16(),()=>m(t,a),80),e.position=t.u64(),e.curHp=r(t,a),e}function Qe(t,a){n(t,a.maxHp),t.u64(a.characterId),t.u32(a.unk0_m),t.array(a.statusEffectDatas,{maxLen:80,lenType:"u16"},e=>{p(t,e)}),t.u64(a.position),n(t,a.curHp)}var Xe="TroopMemberUpdateMinNotify";function ta(t,a){let e={};return e.identityGauge1=t.u32(),e.identityGauge2=t.u32(),e.identityGauge3=t.u32(),e.playerId=t.u64(),e}function ea(t,a){t.u32(a.identityGauge1),t.u32(a.identityGauge2),t.u32(a.identityGauge3),t.u64(a.playerId)}var aa="IdentityGaugeChangeNotify";function oa(t,a){let e={};return e.objectId=t.u64(),e}function ia(t,a){t.u64(a.objectId)}var ra="ZoneObjectUnpublishNotify";function Ii(t,a){let e={};return e.stackCount=t.u8(),e.target=t.u8(),e.id=t.u32(),e}function Pi(t,a){t.u8(a.stackCount),t.u8(a.target),t.u32(a.id)}function na(t,a){let e={};return e.zoneStatusEffectDataList=t.array(t.u16(),()=>Ii(t,a),4),e}function sa(t,a){t.array(a.zoneStatusEffectDataList,{maxLen:4,lenType:"u16"},e=>{Pi(t,e)})}var fa="ZoneStatusEffectAddNotify";function ua(t,a){let e={};return e.statusEffectId=t.u32(),e}function ma(t,a){t.u32(a.statusEffectId)}var pa="ZoneStatusEffectRemoveNotify";function ya(t,a){let e={};return e.skillLevel=t.u8(),e.caster=t.u64(),e.skillId=t.u32(),e}function ca(t,a){t.u8(a.skillLevel),t.u64(a.caster),t.u32(a.skillId)}var la="SkillCastNotify";function da(t,a){let e={};return e.objectId=t.u64(),e.stance=t.u8(),e}function Na(t,a){t.u64(a.objectId),t.u8(a.stance)}var ba="IdentityStanceChangeNotify";function Sa(t,a){let e={};return e.objectId=t.u64(),e.equipItemDataList=t.array(t.u16(),()=>g(t,a),32),e}function ga(t,a){t.u64(a.objectId),t.array(a.equipItemDataList,{maxLen:32,lenType:"u16"},e=>{x(t,e)})}var xa="EquipChangeNotify";function Ea(t,a){let e={};return e.objectId=t.u64(),e.equipLifeToolDataList=t.array(t.u16(),()=>g(t,a),9),e}function Ia(t,a){t.u64(a.objectId),t.array(a.equipLifeToolDataList,{maxLen:9,lenType:"u16"},e=>{x(t,e)})}var Pa="EquipLifeToolChangeNotify";function vi(t,a){let e={};return t.bool()&&(e.serialNumber=t.u64(),e.id=t.u32(),e.level=t.u16(),e.slot=t.u16(),e.durability=t.u32(),e.unk1_6_m=t.u32(),e.flag=t.u32(),e.expireTime=N(t),e.lockUpdateTime=N(t)),e}function Ti(t,a){t.bool(a.slot!==void 0)&&(t.u64(a.serialNumber),t.u32(a.id),t.u16(a.level),t.u16(a.slot),t.u32(a.durability),t.u32(a.unk1_6_m),t.u32(a.flag),b(t,a.expireTime),b(t,a.lockUpdateTime))}function va(t,a){let e={};return e.itemDataList=t.array(t.u16(),()=>vi(t,a),80),e.storageType=t.u8(),e}function Ta(t,a){t.array([1,20].includes(a.storageType)?a.itemDataList:[],{maxLen:80,lenType:"u16"},e=>{Ti(t,e)}),t.u8(a.storageType)}var Da="InitItem";function Di(t,a){let e={};return e.npcId=t.u32(),e.isDead=t.bool(),e}function ki(t,a){t.u32(a.npcId),t.bool(a.isDead)}function ka(t,a){let e={};return e.raidResult=t.u8(),e.raidId=t.u32(),e.totalTime=t.u64(),e.bossKillDataList=t.array(t.u16(),()=>Di(t,a),3),e.endTick=t.u64(),e.startTick=t.u64(),e}function Ra(t,a){t.u8(a.raidResult),t.u32(a.raidId),t.u64(a.totalTime),t.array(a.bossKillDataList,{maxLen:3,lenType:"u16"},e=>{ki(t,e)}),t.u64(a.endTick),t.u64(a.startTick)}var La="RaidBegin";function Aa(t,a){let e={};return e.zoneInstId=t.u64(),e.zoneId=t.u32(),e.loadComplete=t.bool(),e.completeMembers=t.array(t.u16(),()=>t.u64(),40),e.totalMembers=t.array(t.u16(),()=>t.u64(),40),e.firstPCEnterTick=t.u64(),e.zoneLevel=t.u8(),e}function ha(t,a){t.u64(a.zoneInstId),t.u32(a.zoneId),t.bool(a.loadComplete),t.array(a.completeMembers,{maxLen:40,lenType:"u16"},e=>{t.u64(e)}),t.array(a.totalMembers,{maxLen:40,lenType:"u16"},e=>{t.u64(e)}),t.u64(a.firstPCEnterTick),t.u8(a.zoneLevel)}var Ca="ZoneMemberLoadStatusNotify";function Ri(t,a){let e={};return e.position=f(t),e.objectId=t.u64(),e.ownerId=t.u64(),e.skillId=t.u32(),e.skillEffect=t.u32(),e}function Li(t,a){u(t,a.position),t.u64(a.objectId),t.u64(a.ownerId),t.u32(a.skillId),t.u32(a.skillEffect)}function Ka(t,a){let e={};return e.trapData=Ri(t,a),e}function Wa(t,a){Li(t,a.trapData)}var Ma="NewTrap";function Ba(t,a){let e={};return e.skillId=t.u32(),e.caster=t.u64(),e.newDirectionYaw=c(t),e.cancelReason=t.u8(),e.newPosition=f(t),e}function wa(t,a){t.u32(a.skillId),t.u64(a.caster),l(t,a.newDirectionYaw),t.u8(a.cancelReason),u(t,a.newPosition)}var ja="SkillCancelNotify";function Fa(t,a){let e={};return e.players=t.array(t.u8(),()=>{let o={};return o.name=t.string(20),o.stats=t.array(t.u8(),()=>{let i={};return i.id=t.u8(),i.value=t.u32(),i},100),a>=4&&(o.elixirs=t.array(t.u8(),()=>{let i={};return i.slot=t.u8(),i.entries=t.array(t.u8(),()=>{let s={};return s.level=t.u8(),s.id=t.u32(),s}),i},32)),a>=5&&(o.gems=t.array(t.u8(),()=>{let i={};i.id=t.u32(),i.skillId=t.u32(),i.type=t.u8(),i.value=t.u16()})),o},24),e}function Za(t,a){t.array(a.players,{maxLen:24,lenType:"u8"},e=>{t.string(e.name,20),t.array(e.stats,{maxLen:100,lenType:"u8"},o=>{t.u8(o.id),t.u32(o.value)}),t.array(e.elixirs,{maxLen:32,lenType:"u8"},o=>{t.u8(o.slot),t.array(o.entries,{maxLen:5,lenType:"u8"},i=>{t.u8(i.level),t.u32(i.id)})}),t.array(e.gems,{maxLen:20,lenType:"u8"},o=>{t.u32(o.id),t.u32(o.skillId),t.u8(o.type),t.u16(o.value)})})}var qa="APP_StatApi";var _a=new Map([[0,[_,Z,q]],[1,[z,O,U]],[2,[G,V,H]],[4,[J,Y,$]],[5,[tt,Q,X]],[6,[ot,et,at]],[7,[nt,it,rt]],[8,[ut,st,ft]],[9,[yt,mt,pt]],[10,[dt,ct,lt]],[11,[St,Nt,bt]],[12,[It,xt,Et]],[13,[Tt,Pt,vt]],[14,[Lt,kt,Rt]],[15,[Ct,At,ht]],[16,[Mt,Kt,Wt]],[17,[jt,Bt,wt]],[18,[qt,Ft,Zt]],[19,[Ut,_t,Ot]],[20,[Ht,zt,Vt]],[21,[$t,Gt,Yt]],[22,[Xt,Jt,Qt]],[23,[ae,te,ee]],[24,[re,oe,ie]],[25,[fe,ne,se]],[26,[pe,ue,me]],[27,[le,ye,ce]],[28,[be,de,Ne]],[29,[xe,Se,ge]],[30,[Pe,Ee,Ie]],[31,[De,ve,Te]],[32,[Le,ke,Re]],[34,[Ce,Ae,he]],[35,[Me,Ke,We]],[36,[je,Be,we]],[37,[qe,Fe,Ze]],[38,[Ue,_e,Oe]],[39,[He,ze,Ve]],[40,[$e,Ge,Ye]],[41,[Xe,Je,Qe]],[42,[aa,ta,ea]],[43,[ra,oa,ia]],[44,[fa,na,sa]],[45,[pa,ua,ma]],[46,[la,ya,ca]],[47,[ba,da,Na]],[48,[xa,Sa,ga]],[49,[Pa,Ea,Ia]],[50,[Da,va,Ta]],[52,[La,ka,Ra]],[51,[Ca,Aa,ha]],[53,[Ma,Ka,Wa]],[54,[ja,Ba,wa]],[6e4,[qa,Fa,Za]]]);var D=class{time;#e;#t;#a;#o;constructor(...a){if(a.length===5){let[e,o,i,s,y]=a;this.#t=e,this.time=i,this.#e=o,this.#a=s,this.#o=y}else if(a.length===3){let[e,o,i]=a;this.#t=Buffer.alloc(0),this.time=new Date,this.#e=o,this.#a=()=>e,this.#o=i}else throw new Error("[meter-core/logger/parser] - LogEvent<T>: Invalid constructor arguments")}#i;get parsed(){if(!this.#i)try{this.#i=this.#a(new Ga(this.#t))}catch(a){console.error(`[meter-core/logger/parser] - parsed - ${a}`);return}return this.#i}#r;get serialized(){if(!this.#r)try{if(!this.parsed)return;let a=new Ya;a.skip(Ua),this.#o(a,this.parsed);let e=a.value;e.writeUint16LE(e.length,hi),e.writeUint16LE(this.#e,W),e.writeUintLE(+new Date,Oa,M),this.#r=a.value}catch(a){console.error(`[meter-core/logger/parser] - serialized - ${a}`);return}return this.#r}},k=6,Ai=2,hi=0,K=2,W=hi+Ai,M=6,Oa=W+K,Ua=Ai+K+M;import{createWriteStream as Ji}from"fs";import{createReadStream as Qi}from"fs";var B=class extends $i{},Ci=class extends B{#e;#t;constructor(a,e,o){super(),this.#e=e,o&&(this.#t=Ji(o,{highWaterMark:0}));let i=Buffer.allocUnsafe(k);i.writeUIntLE(5,0,k),this.#t?.write(i),a.on("*",this.handlePkt.bind(this))}handlePkt(a,e,o,i){try{let s=ii.get(e),y=ni.get(e);if(s&&y){let[d]=y,[za,w]=s,T=_a.get(d);if(T){let[R,Xi,Mi]=T,Va=new ri(Buffer.from(a),e,o,!!i,this.#e,w).parsed;if(!Va)return;let j=new D(Va,d,Mi);this.emit(R,j),this.emit("*",R,j),this.appendLog(j)}}}catch(s){console.error(s)}}appendLog(a){this.#t&&a.serialized&&this.#t.write(a.serialized)}},Ki=class extends B{readLogByChunk(a){let e=new Ha,o=Qi(a),i=!1,s;o.on("data",y=>{if(s===void 0){if(s=this.readVersion(y),s>5){o.destroy();return}y=y.subarray(k)}e.write(y);let d;for(;d=e.read();)this.readLogChunk(d,s)}).on("end",()=>{i=!0,this.emit("fileEnd","end")}).on("close",()=>{i||this.emit("fileEnd","closed")})}readLogChunk(a,e){try{if(a.length<8)return!1;let o=a.readUIntLE(W,K),i=new Date(a.readUintLE(Oa,M)),s=a.subarray(Ua),y=_a.get(o);if(y){let[d,za,w]=y,T=new D(s,o,new Date(i),R=>za(R,e),w);this.emit(d,T),this.emit("*",d,T)}}catch(o){console.error(o)}}readVersion(a){return a.readUintLE(0,k)}};export{bt as a,_a as b,D as c,B as d,Ci as e,Ki as f};
