// automatically generated by the FlatBuffers compiler, do not modify

package slimevr_protocol.server;

@SuppressWarnings("unused")
public final class InboundUnion {
  private InboundUnion() { }
  public static final byte NONE = 0;
  public static final byte ConnectionRequest = 1;
  public static final byte ResetRequest = 2;
  public static final byte AssignTrackerRequest = 3;
  public static final byte ChangeSettingsRequest = 4;
  public static final byte SettingsRequest = 5;
  public static final byte SkeletonConfigRequest = 6;
  public static final byte ChangeSkeletonConfigRequest = 7;
  public static final byte slimevr_protocol_misc_Acknowledgement = 8;

  public static final String[] names = { "NONE", "ConnectionRequest", "ResetRequest", "AssignTrackerRequest", "ChangeSettingsRequest", "SettingsRequest", "SkeletonConfigRequest", "ChangeSkeletonConfigRequest", "slimevr_protocol_misc_Acknowledgement", };

  public static String name(int e) { return names[e]; }
}

