import{a as _a}from"./chunk-ZGEJ7KGT.mjs";import{$ as Bo,A as fo,B as uo,C as mo,D as po,E as yo,F as co,G as lo,H as No,I as bo,J as So,K as go,L as Eo,M as xo,N as Io,O as Po,P as vo,Q as To,R as Do,S as Ro,T as ko,U as Lo,V as Ao,W as ho,X as Co,Y as Ko,Z as Wo,_ as Mo,a as Ua,aa as wo,b as za,ba as jo,c as Va,ca as Fo,d as Ha,da as Zo,e as Ga,ea as qo,f as Ya,fa as Oo,g as $a,ga as _o,h as Ja,ha as Uo,i as N,ia as zo,j as b,ja as Vo,k as Qa,ka as Ho,l as Xa,la as Go,m as to,ma as Yo,n as eo,na as $o,o as ao,oa as Jo,p as i,pa as Qo,q as r,qa as Xo,r as oo,s as io,sa as ti,t as ro,u as no,v as l,w as d,x as s,y as f,z as so}from"./chunk-FB3TZSEX.mjs";import{TypedEmitter as Vi}from"tiny-typed-emitter";var ei=new Map([[Va,[0]],[Ha,[1]],[Ga,[2]],[Ya,[4]],[$a,[5]],[Ja,[6]],[eo,[7]],[ao,[8]],[oo,[9]],[ro,[10]],[no,[11]],[so,[12]],[fo,[13]],[uo,[14]],[lo,[15]],[bo,[16]],[So,[17]],[go,[18]],[Eo,[19]],[xo,[20]],[Io,[21]],[Po,[22]],[vo,[23]],[To,[24]],[Do,[25]],[ko,[26]],[Lo,[27]],[Ao,[28]],[Wo,[29]],[Mo,[30]],[Bo,[31]],[Fo,[32]],[Zo,[34]],[qo,[35]],[Oo,[36]],[_o,[37]],[Uo,[38]],[zo,[39]],[Vo,[40]],[Ho,[41]],[Go,[42]],[$o,[43]],[Jo,[44]],[Qo,[45]],[ho,[46]],[to,[47]],[Qa,[48]],[Xa,[49]],[io,[50]],[Ro,[52]],[Yo,[51]],[No,[53]]]);function x(t,a){let e={};return e.points=t.u16(),e.id=t.u32(),e.level=t.u8(),e}function I(t,a){t.u16(a.points),t.u32(a.id),t.u8(a.level)}function Z(t,a){let e={};return e.abilityDataList=t.array(t.u16(),()=>x(t,a),100),e}function q(t,a){t.array(a.abilityDataList,{maxLen:100,lenType:"u16"},e=>{I(t,e)})}var O="AbilityChangeNotify";function ai(t,a){let e={};return e.featureType=t.u16(),e.level=t.u32(),e}function oi(t,a){t.u16(a.featureType),t.u32(a.level)}function _(t,a){let e={};return e.activeAbilityList=t.array(t.u16(),()=>ai(t,a),60),e.objectId=t.u64(),e}function U(t,a){t.array(a.activeAbilityList,{maxLen:60,lenType:"u16"},e=>{oi(t,e)}),t.u64(a.objectId)}var z="ActiveAbilityNotify";function V(t,a){let e={};return e.objectId=t.u64(),e.addonSkillFeatureList=t.array(t.u16(),()=>{let o={};return o.addonSkillFeatureIdList=t.array(t.u16(),()=>t.u32(),5),o.skillId=t.u32(),o},200),e}function H(t,a){t.u64(a.objectId),t.array(a.addonSkillFeatureList,{maxLen:200,lenType:"u16"},e=>{t.array(e.addonSkillFeatureIdList,{maxLen:5,lenType:"u16"},o=>{t.u32(o)}),t.u32(e.skillId)})}var G="AddonSkillFeatureChangeNotify";function Y(t,a){let e={};return e.paralyzationMaxPoint=t.u32(),e.type=t.u8(),e.objectId=t.u64(),e.paralyzationPoint=t.u32(),e}function $(t,a){t.u32(a.paralyzationMaxPoint),t.u8(a.type),t.u64(a.objectId),t.u32(a.paralyzationPoint)}var J="BlockSkillStateNotify";function Q(t,a){let e={};return e.sourceId=t.u64(),e.targetId=t.u64(),e.type=t.u32(),e}function X(t,a){t.u64(a.sourceId),t.u64(a.targetId),t.u32(a.type)}var tt="CounterAttackNotify";function et(t,a){let e={};return e.sourceId=t.u64(),e.targetId=t.u64(),e}function at(t,a){t.u64(a.sourceId),t.u64(a.targetId)}var ot="DeathNotify";function it(t,a){let e={};return e.abilityDataList=t.array(t.u16(),()=>x(t,a),100),e}function rt(t,a){t.array(a.abilityDataList,{maxLen:100,lenType:"u16"},e=>{I(t,e)})}var nt="InitAbility";function st(t,a){let e={};return e.playerId=t.u64(),e}function ft(t,a){t.u64(a.playerId)}var ut="InitEnv";function u(t,a){let e={};return e.skillLevel=t.u8(),e.occurTime=N(t,a),e.statusEffectId=t.u32(),e.sourceId=t.u64(),e.totalTime=t.f32(),e.endTick=t.u64(),t.bool()&&(e.value=t.bytes(16)),e.effectInstanceId=t.u32(),a>=1?e.stackCount=t.u8():e.stackCount=1,e}function m(t,a){t.u8(a.skillLevel),b(t,a.occurTime),t.u32(a.statusEffectId),t.u64(a.sourceId),t.f32(a.totalTime),t.u64(a.endTick),t.bool(a.value!==void 0)&&t.bytes(a.value,{length:16}),t.u32(a.effectInstanceId),t.u8(a.stackCount)}function mt(t,a){let e={};return e.statPair=t.array(t.u16(),()=>{let o={};return o.StatType=t.u8(),o.Value=i(t,a),o},152),e.name=t.string(20),e.level=t.u16(),e.statusEffectDatas=t.array(t.u16(),()=>u(t,a),80),e.characterId=t.u64(),e.gearLevel=t.f32(),e.playerId=t.u64(),e.classId=t.u16(),e}function pt(t,a){t.array(a.statPair,{maxLen:152,lenType:"u16"},e=>{t.u8(e.statType),r(t,e.value)}),t.string(a.name,20),t.u16(a.level),t.array(a.statusEffectDatas,{maxLen:80,lenType:"u16"},e=>{m(t,e)}),t.u64(a.characterId),t.f32(a.gearLevel),t.u64(a.playerId),t.u16(a.classId)}var yt="InitPC";function ct(t,a){let e={};return e.statPair=t.array(t.u16(),()=>{let o={};return o.statType=t.u8(),o.value=i(t,a),o},152),e.statusEffectDatas=t.array(t.u16(),()=>u(t,a),80),e.addonSkillFeatureList=t.array(t.u16(),()=>{let o={};return o.addonSkillFeatureIdList=t.array(t.u16(),()=>t.u32(),5),o.skillId=t.u32(),o},200),e.abilityDataList=t.array(t.u16(),()=>x(t,a),100),e}function lt(t,a){t.array(a.statPair,{maxLen:152,lenType:"u16"},e=>{t.u8(e.statType),r(t,e.value)}),t.array(a.statusEffectDatas,{maxLen:80,lenType:"u16"},e=>{m(t,e)}),t.array(a.addonSkillFeatureList,{maxLen:200,lenType:"u16"},e=>{t.array(e.addonSkillFeatureIdList,{maxLen:5,lenType:"u16"},o=>{t.u32(o)}),t.u32(e.skillId)}),t.array(a.abilityDataList,{maxLen:100,lenType:"u16"},e=>{I(t,e)})}var dt="InitLocal";function Nt(t,a){let e={};return e.account_CharacterId1=t.u64(),e.serverAddr=t.string(256),e.account_CharacterId2=t.u64(),e}function bt(t,a){t.u64(a.account_CharacterId1),t.string(a.serverAddr,256),t.u64(a.account_CharacterId2)}var St="MigrationExecute";function L(t,a){let e={};return e.spawnIndex=t.u32(),e.objectId=t.u64(),t.bool()&&(e.transitIndex=t.u32()),e.position=s(t,a),e.statusEffectDatas=t.array(t.u16(),()=>u(t,a),80),e.directionYaw=l(t,a),e.statPair=t.array(t.u16(),()=>{let o={};return o.statType=t.u8(),o.value=i(t,a),o},152),e.typeId=t.u32(),a>=1?(e.level=t.u16(),t.bool()&&(e.balanceLevel=t.u16())):e.level=0,e}function A(t,a){t.u32(a.spawnIndex),t.u64(a.objectId),t.bool(a.transitIndex!==void 0)&&t.u32(a.transitIndex),f(t,a.position),t.array(a.statusEffectDatas,{maxLen:80,lenType:"u16"},e=>{m(t,e)}),d(t,a.directionYaw),t.array(a.statPair,{maxLen:152,lenType:"u16"},e=>{t.u8(e.statType),r(t,e.value)}),t.u32(a.typeId),t.u16(a.level),t.bool(a.balanceLevel!==void 0)&&t.u16(a.balanceLevel)}function gt(t,a){let e={};return e.npcStruct=L(t,a),e}function Et(t,a){A(t,a.npcStruct)}var xt="NewNpc";function It(t,a){let e={};return e.publishReason=t.u8(),e.ownerId=t.u64(),e.npcData=L(t,a),e}function Pt(t,a){t.u8(a.publishReason),t.u64(a.ownerId),A(t,a.npcData)}var vt="NewNpcSummon";function g(t,a){let e={};return e.slot=t.u16(),e.level=t.u16(),e.itemTint=t.bytes(t.u16(),3,14),e.expireTime=N(t),e.id=t.u32(),e}function E(t,a){t.u16(a.slot),t.u16(a.level),t.bytes(a.itemTint,{maxLen:3,lenType:"u16",multiplier:14}),b(t,a.expireTime),t.u32(a.id)}function si(t,a){let e={};return e.maxItemLevel=t.f32(),e.statPair=t.array(t.u16(),()=>{let o={};return o.statType=t.u8(),o.value=i(t,a),o},152),e.name=t.string(20),e.heading=l(t,a),e.characterId=t.u64(),e.playerId=t.u64(),e.addonSkillFeatureList=t.array(t.u16(),()=>{let o={};return o.addonSkillFeatureIdList=t.array(t.u16(),()=>t.u32(),5),o.SkillId=t.u32(),o},200),e.classId=t.u16(),e.level=t.u16(),e.statusEffectDatas=t.array(t.u16(),()=>u(t,a),80),a>=1?(e.avgItemLevel=t.f32(),e.position=s(t),e.equipItemDataList=t.array(t.u16(),()=>g(t,a),32),e.equipLifeToolDataList=t.array(t.u16(),()=>g(t,a),9),e.guildName=t.string(20),a>=2?e.guildId=t.u64():e.guildId=BigInt(t.u32())):(e.avgItemLevel=e.maxItemLevel,e.position={x:0,y:0,z:0},e.equipItemDataList=[],e.equipLifeToolDataList=[],e.guildName="",e.guildId=0n),e}function fi(t,a){t.f32(a.maxItemLevel),t.array(a.statPair,{maxLen:152,lenType:"u16"},e=>{t.u8(e.statType),r(t,e.value)}),t.string(a.name,20),d(t,a.heading),t.u64(a.characterId),t.u64(a.playerId),t.array(a.addonSkillFeatureList,{maxLen:200,lenType:"u16"},e=>{t.array(e.addonSkillFeatureIdList,{maxLen:5,lenType:"u16"},o=>{t.u32(o)}),t.u32(e.skillId)}),t.u16(a.classId),t.u16(a.level),t.array(a.statusEffectDatas,{maxLen:80,lenType:"u16"},e=>{m(t,e)}),t.f32(a.avgItemLevel),f(t,a.position),t.array(a.equipItemDataList,{maxLen:32,lenType:"u16"},e=>{E(t,e)}),t.array(a.equipLifeToolDataList,{maxLen:9,lenType:"u16"},e=>{E(t,e)}),t.string(a.guildName,20),t.u64(a.guildId)}function Dt(t,a){let e={};return e.pcStruct=si(t,a),e}function Rt(t,a){fi(t,a.pcStruct)}var kt="NewPC";function ui(t,a){let e={};return e.tripodIndex=yo(t,a),e.chainSkillEffect=t.u32(),e.skillEffect=t.u32(),e.skillId=t.u32(),e.targetObjectId=t.u64(),e.ownerId=t.u64(),e.skillLevel=t.u8(),e.projectileId=t.u64(),e.tripodLevel=mo(t,a),e}function mi(t,a){co(t,a.tripodIndex),t.u32(a.chainSkillEffect),t.u32(a.skillEffect),t.u32(a.skillId),t.u64(a.targetObjectId),t.u64(a.ownerId),t.u8(a.skillLevel),t.u64(a.projectileId),po(t,a.tripodLevel)}function Lt(t,a){let e={};return e.projectileInfo=ui(t,a),e}function At(t,a){mi(t,a.projectileInfo)}var ht="NewProjectile";function Ct(t,a){let e={};return e.enable=t.bool(),e.paralyzationPoint=t.u32(),e.decreasePoint=t.u32(),e.paralyzationMaxPoint=t.u32(),e.noHitCheckTime=t.u32(),e.hitCheckTime=t.u32(),e.objectId=t.u64(),e}function Kt(t,a){t.bool(a.enable),t.u32(a.paralyzationPoint),t.u32(a.decreasePoint),t.u32(a.paralyzationMaxPoint),t.u32(a.noHitCheckTime),t.u32(a.hitCheckTime),t.u64(a.objectId)}var Wt="ParalyzationStateNotify";function pi(t,a){let e={};return e.maxHp=i(t,a),e.characterId=t.u64(),e.position=s(t,a),e.transitIndex=t.u32(),e.curHp=i(t,a),e.characterLevel=t.u16(),e.gearLevel=t.f32(),e.zoneId=t.u32(),e.partyMemberNumber=t.u8(),e.name=t.string(20),e.zoneInstId=t.u64(),e.worldId=t.u8(),e.classId=t.u16(),e.auths=t.u8(),e}function yi(t,a){r(t,a.maxHp),t.u64(a.characterId),f(t,a.position),t.u32(a.transitIndex),r(t,a.curHp),t.u16(a.characterLevel),t.f32(a.gearLevel),t.u32(a.zoneId),t.u8(a.partyMemberNumber),t.string(a.name,20),t.u64(a.zoneInstId),t.u8(a.worldId),t.u16(a.classId),t.u8(a.auths)}function Mt(t,a){let e={};return e.raidInstanceId=t.u32(),e.lootGrade=t.u32(),e.partyType=t.u8(),e.partyInstanceId=t.u32(),e.partyLootType=t.u8(),e.memberDatas=t.array(t.u16(),()=>pi(t,a),40),e}function Bt(t,a){t.u32(a.raidInstanceId),t.u32(a.lootGrade),t.u8(a.partyType),t.u32(a.partyInstanceId),t.u8(a.partyLootType),t.array(a.memberDatas,{maxLen:40,lenType:"u16"},e=>{yi(t,e)})}var wt="PartyInfo";function jt(t,a){let e={};return e.partyLeaveType=t.u8(),e.partyInstanceId=t.u32(),e.name=t.string(20),e}function Ft(t,a){t.u8(a.partyLeaveType),t.u32(a.partyInstanceId),t.string(a.name,20)}var Zt="PartyLeaveResult";function qt(t,a){let e={};return e.objectId=t.u64(),e.passiveStatusEffectList=t.array(t.u16(),()=>t.u32(),10),e.unk0_m=t.u8(),e}function Ot(t,a){t.u64(a.objectId),t.array(a.passiveStatusEffectList,{maxLen:10,lenType:"u16"},e=>{t.u32(e)}),t.u8(a.unk0_m)}var _t="PartyPassiveStatusEffectAddNotify";function Ut(t,a){let e={};return e.objectId=t.u64(),e.passiveStatusEffectList=t.array(t.u16(),()=>t.u32(),10),e}function zt(t,a){t.u64(a.objectId),t.array(a.passiveStatusEffectList,{maxLen:10,lenType:"u16"},e=>{t.u32(e)})}var Vt="PartyPassiveStatusEffectRemoveNotify";function Ht(t,a){let e={};return e.characterId=t.u64(),e.statusEffectDatas=t.array(t.u16(),()=>u(t,a),80),e.playerIdOnRefresh=t.u64(),e}function Gt(t,a){t.u64(a.characterId),t.array(a.statusEffectDatas,{maxLen:80,lenType:"u16"},e=>{m(t,e)}),t.u64(a.playerIdOnRefresh)}var Yt="PartyStatusEffectAddNotify";function $t(t,a){let e={};return e.characterId=t.u64(),e.statusEffectIds=t.array(t.u16(),()=>t.u32(),80),e.reason=t.u8(),e}function Jt(t,a){t.u64(a.characterId),t.array(a.statusEffectIds,{maxLen:80,lenType:"u16"},e=>{t.u32(e)}),t.u8(a.reason)}var Qt="PartyStatusEffectRemoveNotify";function Xt(t,a){let e={};return e.partyInstanceId=t.u32(),e.raidInstanceId=t.u32(),e.characterId=t.u64(),e}function te(t,a){t.u32(a.partyInstanceId),t.u32(a.raidInstanceId),t.u64(a.characterId)}var ee="PartyStatusEffectResultNotify";function ae(t,a){let e={};return e.passiveStatusEffectList=t.array(t.u16(),()=>t.u32(),10),e}function oe(t,a){t.array(a.passiveStatusEffectList,{maxLen:10,lenType:"u16"},e=>{t.u32(e)})}var ie="PassiveStatusEffectAddNotify";function re(t,a){let e={};return e.passiveStatusEffectList=t.array(t.u16(),()=>t.u32(),10),e}function ne(t,a){t.array(a.passiveStatusEffectList,{maxLen:10,lenType:"u16"},e=>{t.u32(e)})}var se="PassiveStatusEffectRemoveNotify";function fe(t,a){return{}}function ue(t,a){}var me="RaidBossKillNotify";function pe(t,a){let e={};return a>=3?e.raidResult=t.u8():e.raidResult=0,e}function ye(t,a){t.u8(a.raidResult)}var ce="RaidResult";function ci(t,a){let e={};return e.unpublishReason=t.u8(),e.objectId=t.u64(),e}function li(t,a){t.u8(a.unpublishReason),t.u64(a.objectId)}function le(t,a){let e={};return e.unpublishedObjects=t.array(t.u16(),()=>ci(t,a),200),e}function de(t,a){t.array(a.unpublishedObjects,{maxLen:200,lenType:"u16"},e=>{li(t,e)})}var Ne="RemoveObject";function h(t,a){let e={};return e.modifier=t.u8(),e.targetId=t.u64(),e.damageType=t.u8(),t.bool()&&(e.damageAttr=t.u8()),e.curHp=i(t,a),e.unk3_m=t.u16(),e.maxHp=i(t,a),e.damage=i(t,a),e}function C(t,a){t.u8(a.modifier),t.u64(a.targetId),t.u8(a.damageType),t.bool(a.damageAttr!==void 0)&&t.u8(a.damageAttr),r(t,a.curHp),t.u16(a.unk3_m),r(t,a.maxHp),r(t,a.damage)}function Ni(t,a){let e={};return e.skillMoveOptionData=Co(t,a),e.destination=s(t,a),e.position=s(t,a),e.skillDamageEvent=h(t,a),e}function bi(t,a){Ko(t,a.skillMoveOptionData),f(t,a.destination),f(t,a.position),C(t,a.skillDamageEvent)}function be(t,a){let e={};return e.skillId=t.u32(),e.skillDamageAbnormalMoveEvents=t.array(t.u16(),()=>Ni(t,a),50),e.skillEffectId=t.u32(),e.sourceId=t.u64(),e}function Se(t,a){t.u32(a.skillId),t.array(a.skillDamageAbnormalMoveEvents,{maxLen:50,lenType:"u16"},e=>{bi(t,e)}),t.u32(a.skillEffectId),t.u64(a.sourceId)}var ge="SkillDamageAbnormalMoveNotify";function Ee(t,a){let e={};return e.skillLevel=t.u8(),e.sourceId=t.u64(),e.skillId=t.u32(),e.skillDamageEvents=t.array(t.u16(),()=>h(t,a),50),e.skillEffectId=t.u32(),e}function xe(t,a){t.u8(a.skillLevel),t.u64(a.sourceId),t.u32(a.skillId),t.array(a.skillDamageEvents,{maxLen:50,lenType:"u16"},e=>{C(t,e)}),t.u32(a.skillEffectId??0)}var Ie="SkillDamageNotify";function Pe(t,a){let e={};return e.sourceId=t.u64(),e.skillId=t.u32(),e.stage=t.u8(),e}function ve(t,a){t.u64(a.sourceId),t.u32(a.skillId),t.u8(a.stage)}var Te="SkillStageNotify";function De(t,a){let e={};return e.sourceId=t.u64(),e.curDirectionYaw=l(t,a),e.newDirectionYaw=l(t,a),e.aimTargetPosition=s(t,a),t.bool()&&(e.pitchRotation=l(t,a)),t.bool()&&(e.aiStateId=t.u32()),e.curPosition=s(t,a),t.bool()&&(e.unk1_m=t.u32()),e.skillLevel=t.u8(),e.newPosition=s(t,a),e.skillId=t.u32(),e.skillOptionData=wo(t,a),e}function Re(t,a){t.u64(a.sourceId),d(t,a.curDirectionYaw),d(t,a.newDirectionYaw),f(t,a.aimTargetPosition),t.bool(a.pitchRotation!==void 0)&&d(t,a.pitchRotation),t.bool(a.aiStateId!==void 0)&&t.u32(a.aiStateId),f(t,a.curPosition),t.bool(a.unk1_m!==void 0)&&t.u32(a.unk1_m),t.u8(a.skillLevel),f(t,a.newPosition),t.u32(a.skillId),jo(t,a.skillOptionData)}var ke="SkillStartNotify";function Le(t,a){let e={};return e.statusEffectData=u(t,a),e.objectId=t.u64(),e.new=t.bool(),e}function Ae(t,a){m(t,a.statusEffectData),t.u64(a.objectId),t.bool(a.new)}var he="StatusEffectAddNotify";function Ce(t,a){let e={};return e.statusEffectIds=t.array(t.u16(),()=>t.u32(),80),e.objectId=t.u64(),e.reason=t.u8(),e}function Ke(t,a){t.array(a.statusEffectIds,{maxLen:80,lenType:"u16"},e=>{t.u32(e)}),t.u64(a.objectId),t.u8(a.reason)}var We="StatusEffectRemoveNotify";function Me(t,a){let e={};return e.effectInstanceId=t.u32(),e.targetId=t.u64(),e.expirationTick=t.u64(),e}function Be(t,a){t.u32(a.effectInstanceId),t.u64(a.targetId),t.u64(a.expirationTick)}var we="StatusEffectDurationNotify";function je(t,a){let e={};return e.objectId=t.u64(),e.effectInstanceId=t.u32(),e.characterId=t.u64(),e.value=t.u32(),e}function Fe(t,a){t.u64(a.objectId),t.u32(a.effectInstanceId),t.u64(a.characterId),t.u32(a.value)}var Ze="StatusEffectSyncDataNotify";function qe(t,a){let e={};return e.step=t.u32(),e.unk2_m=t.bool(),e.triggerId=t.u32(),e}function Oe(t,a){t.u32(a.step),t.bool(a.unk2_m),t.u32(a.triggerId)}var _e="TriggerBossBattleStatus";function Ue(t,a){let e={};return e.packetResultCode=t.u32(),e.triggerId=t.u32(),e.unk0_m=t.u32(),e.involvedPCs=t.array(t.u16(),()=>t.u64(),40),e}function ze(t,a){t.u32(a.packetResultCode),t.u32(a.triggerId),t.u32(a.unk0_m),t.array(a.involvedPCs,{maxLen:40,lenType:"u16"},e=>{t.u64(e)})}var Ve="TriggerFinishNotify";function He(t,a){let e={};return e.triggerId=t.u32(),e.triggerSignalType=t.u32(),e.sourceId=t.u64(),e.involvedPCs=t.array(t.u16(),()=>t.u64(),40),e}function Ge(t,a){t.u32(a.triggerId),t.u32(a.triggerSignalType),t.u64(a.sourceId),t.array(a.involvedPCs,{maxLen:40,lenType:"u16"},e=>{t.u64(e)})}var Ye="TriggerStartNotify";function $e(t,a){let e={};return e.maxHp=i(t,a),e.characterId=t.u64(),e.unk0_m=t.u32(),e.statusEffectDatas=t.array(t.u16(),()=>u(t,a),80),e.position=t.u64(),e.curHp=i(t,a),e}function Je(t,a){r(t,a.maxHp),t.u64(a.characterId),t.u32(a.unk0_m),t.array(a.statusEffectDatas,{maxLen:80,lenType:"u16"},e=>{m(t,e)}),t.u64(a.position),r(t,a.curHp)}var Qe="TroopMemberUpdateMinNotify";function Xe(t,a){let e={};return e.identityGauge1=t.u32(),e.identityGauge2=t.u32(),e.identityGauge3=t.u32(),e.playerId=t.u64(),e}function ta(t,a){t.u32(a.identityGauge1),t.u32(a.identityGauge2),t.u32(a.identityGauge3),t.u64(a.playerId)}var ea="IdentityGaugeChangeNotify";function aa(t,a){let e={};return e.objectId=t.u64(),e}function oa(t,a){t.u64(a.objectId)}var ia="ZoneObjectUnpublishNotify";function Si(t,a){let e={};return e.stackCount=t.u8(),e.target=t.u8(),e.id=t.u32(),e}function gi(t,a){t.u8(a.stackCount),t.u8(a.target),t.u32(a.id)}function ra(t,a){let e={};return e.zoneStatusEffectDataList=t.array(t.u16(),()=>Si(t,a),4),e}function na(t,a){t.array(a.zoneStatusEffectDataList,{maxLen:4,lenType:"u16"},e=>{gi(t,e)})}var sa="ZoneStatusEffectAddNotify";function fa(t,a){let e={};return e.statusEffectId=t.u32(),e}function ua(t,a){t.u32(a.statusEffectId)}var ma="ZoneStatusEffectRemoveNotify";function pa(t,a){let e={};return e.skillLevel=t.u8(),e.caster=t.u64(),e.skillId=t.u32(),e}function ya(t,a){t.u8(a.skillLevel),t.u64(a.caster),t.u32(a.skillId)}var ca="SkillCastNotify";function la(t,a){let e={};return e.objectId=t.u64(),e.stance=t.u8(),e}function da(t,a){t.u64(a.objectId),t.u8(a.stance)}var Na="IdentityStanceChangeNotify";function ba(t,a){let e={};return e.objectId=t.u64(),e.equipItemDataList=t.array(t.u16(),()=>g(t,a),32),e}function Sa(t,a){t.u64(a.objectId),t.array(a.equipItemDataList,{maxLen:32,lenType:"u16"},e=>{E(t,e)})}var ga="EquipChangeNotify";function Ea(t,a){let e={};return e.objectId=t.u64(),e.equipLifeToolDataList=t.array(t.u16(),()=>g(t,a),9),e}function xa(t,a){t.u64(a.objectId),t.array(a.equipLifeToolDataList,{maxLen:9,lenType:"u16"},e=>{E(t,e)})}var Ia="EquipLifeToolChangeNotify";function Ei(t,a){let e={};return t.bool()&&(e.serialNumber=t.u64(),e.id=t.u32(),e.level=t.u16(),e.slot=t.u16(),e.durability=t.u32(),e.unk1_6_m=t.u32(),e.flag=t.u32(),e.expireTime=N(t),e.lockUpdateTime=N(t)),e}function xi(t,a){t.bool(a.slot!==void 0)&&(t.u64(a.serialNumber),t.u32(a.id),t.u16(a.level),t.u16(a.slot),t.u32(a.durability),t.u32(a.unk1_6_m),t.u32(a.flag),b(t,a.expireTime),b(t,a.lockUpdateTime))}function Pa(t,a){let e={};return e.itemDataList=t.array(t.u16(),()=>Ei(t,a),80),e.storageType=t.u8(),e}function va(t,a){t.array(a.storageType===1?a.itemDataList:[],{maxLen:80,lenType:"u16"},e=>{xi(t,e)}),t.u8(a.storageType)}var Ta="InitItem";function Ii(t,a){let e={};return e.npcId=t.u32(),e.isDead=t.bool(),e}function Pi(t,a){t.u32(a.npcId),t.bool(a.isDead)}function Da(t,a){let e={};return e.raidResult=t.u8(),e.raidId=t.u32(),e.totalTime=t.u64(),e.bossKillDataList=t.array(t.u16(),()=>Ii(t,a),3),e.endTick=t.u64(),e.startTick=t.u64(),e}function Ra(t,a){t.u8(a.raidResult),t.u32(a.raidId),t.u64(a.totalTime),t.array(a.bossKillDataList,{maxLen:3,lenType:"u16"},e=>{Pi(t,e)}),t.u64(a.endTick),t.u64(a.startTick)}var ka="RaidBegin";function La(t,a){let e={};return e.zoneInstId=t.u64(),e.zoneId=t.u32(),e.loadComplete=t.bool(),e.completeMembers=t.array(t.u16(),()=>t.u64(),40),e.totalMembers=t.array(t.u16(),()=>t.u64(),40),e.firstPCEnterTick=t.u64(),e.zoneLevel=t.u8(),e}function Aa(t,a){t.u64(a.zoneInstId),t.u32(a.zoneId),t.bool(a.loadComplete),t.array(a.completeMembers,{maxLen:40,lenType:"u16"},e=>{t.u64(e)}),t.array(a.totalMembers,{maxLen:40,lenType:"u16"},e=>{t.u64(e)}),t.u64(a.firstPCEnterTick),t.u8(a.zoneLevel)}var ha="ZoneMemberLoadStatusNotify";function vi(t,a){let e={};return e.position=s(t),e.objectId=t.u64(),e.ownerId=t.u64(),e.skillId=t.u32(),e.skillEffect=t.u32(),e}function Ti(t,a){f(t,a.position),t.u64(a.objectId),t.u64(a.ownerId),t.u32(a.skillId),t.u32(a.skillEffect)}function Ca(t,a){let e={};return e.trapData=vi(t,a),e}function Ka(t,a){Ti(t,a.trapData)}var Wa="NewTrap";function Ma(t,a){let e={};return e.players=t.array(t.u8(),()=>{let o={};return o.name=t.string(20),o.stats=t.array(t.u8(),()=>{let n={};return n.id=t.u8(),n.value=t.u32(),n},100),o},24),e}function Ba(t,a){t.array(a.players,{maxLen:24,lenType:"u8"},e=>{t.string(e.name,20),t.array(e.stats,{maxLen:100,lenType:"u8"},o=>{t.u8(o.id),t.u32(o.value)})})}var wa="APP_StatApi";var ja=new Map([[0,[O,Z,q]],[1,[z,_,U]],[2,[G,V,H]],[4,[J,Y,$]],[5,[tt,Q,X]],[6,[ot,et,at]],[7,[nt,it,rt]],[8,[ut,st,ft]],[9,[yt,mt,pt]],[10,[dt,ct,lt]],[11,[St,Nt,bt]],[12,[xt,gt,Et]],[13,[vt,It,Pt]],[14,[kt,Dt,Rt]],[15,[ht,Lt,At]],[16,[Wt,Ct,Kt]],[17,[wt,Mt,Bt]],[18,[Zt,jt,Ft]],[19,[_t,qt,Ot]],[20,[Vt,Ut,zt]],[21,[Yt,Ht,Gt]],[22,[Qt,$t,Jt]],[23,[ee,Xt,te]],[24,[ie,ae,oe]],[25,[se,re,ne]],[26,[me,fe,ue]],[27,[ce,pe,ye]],[28,[Ne,le,de]],[29,[ge,be,Se]],[30,[Ie,Ee,xe]],[31,[Te,Pe,ve]],[32,[ke,De,Re]],[34,[he,Le,Ae]],[35,[We,Ce,Ke]],[36,[we,Me,Be]],[37,[Ze,je,Fe]],[38,[_e,qe,Oe]],[39,[Ve,Ue,ze]],[40,[Ye,He,Ge]],[41,[Qe,$e,Je]],[42,[ea,Xe,ta]],[43,[ia,aa,oa]],[44,[sa,ra,na]],[45,[ma,fa,ua]],[46,[ca,pa,ya]],[47,[Na,la,da]],[48,[ga,ba,Sa]],[49,[Ia,Ea,xa]],[50,[Ta,Pa,va]],[52,[ka,Da,Ra]],[51,[ha,La,Aa]],[53,[Wa,Ca,Ka]],[6e4,[wa,Ma,Ba]]]);var D=class{time;#e;#t;#a;#o;constructor(...a){if(a.length===5){let[e,o,n,p,y]=a;this.#t=e,this.time=n,this.#e=o,this.#a=p,this.#o=y}else if(a.length===3){let[e,o,n]=a;this.#t=Buffer.alloc(0),this.time=new Date,this.#e=o,this.#a=()=>e,this.#o=n}else throw new Error("[meter-core/logger/parser] - LogEvent<T>: Invalid constructor arguments")}#i;get parsed(){if(!this.#i)try{this.#i=this.#a(new Ua(this.#t))}catch(a){console.error(`[meter-core/logger/parser] - parsed - ${a}`);return}return this.#i}#r;get serialized(){if(!this.#r)try{if(!this.parsed)return;let a=new za;a.skip(Za),this.#o(a,this.parsed);let e=a.value;e.writeUint16LE(e.length,Ri),e.writeUint16LE(this.#e,W),e.writeUintLE(+new Date,Fa,M),this.#r=a.value}catch(a){console.error(`[meter-core/logger/parser] - serialized - ${a}`);return}return this.#r}},R=6,Di=2,Ri=0,K=2,W=Ri+Di,M=6,Fa=W+K,Za=Di+K+M;import{createWriteStream as Hi}from"fs";import{createReadStream as Gi}from"fs";var B=class extends Vi{},ki=class extends B{#e;#t;constructor(a,e,o){super(),this.#e=e,o&&(this.#t=Hi(o,{highWaterMark:0}));let n=Buffer.allocUnsafe(R);n.writeUIntLE(3,0,R),this.#t?.write(n),a.on("*",this.handlePkt.bind(this))}handlePkt(a,e,o,n){try{let p=Xo.get(e),y=ei.get(e);if(p&&y){let[c]=y,[qa,w]=p,v=ja.get(c);if(v){let[k,Yi,hi]=v,Oa=new ti(Buffer.from(a),e,o,!!n,this.#e,w).parsed;if(!Oa)return;let j=new D(Oa,c,hi);this.emit(k,j),this.emit("*",k,j),this.appendLog(j)}}}catch(p){console.error(p)}}appendLog(a){this.#t&&a.serialized&&this.#t.write(a.serialized)}},Li=class extends B{readLogByChunk(a){let e=new _a,o=Gi(a),n=!1,p;o.on("data",y=>{if(p===void 0){if(p=this.readVersion(y),p>3){o.destroy();return}y=y.subarray(R)}e.write(y);let c;for(;c=e.read();)this.readLogChunk(c,p)}).on("end",()=>{n=!0,this.emit("fileEnd","end")}).on("close",()=>{n||this.emit("fileEnd","closed")})}readLogChunk(a,e){try{if(a.length<8)return!1;let o=a.readUIntLE(W,K),n=new Date(a.readUintLE(Fa,M)),p=a.subarray(Za),y=ja.get(o);if(y){let[c,qa,w]=y,v=new D(p,o,new Date(n),k=>qa(k,e),w);this.emit(c,v),this.emit("*",c,v)}}catch(o){console.error(o)}}readVersion(a){return a.readUintLE(0,R)}};export{bt as a,ja as b,D as c,B as d,ki as e,Li as f};
