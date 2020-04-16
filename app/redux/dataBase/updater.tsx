import configureStore from "../store";

class Updater {
  private _is_Conn() {
    var conn = configureStore.getState().SocketConn.isConn;
    return { conn, socket: configureStore.getState().SocketConn.socket };
  }

  private _setToUpdate(props, sendCallback) {}

  public _UpdateWorkPeriod(props, sendCallback) {
    if (this._is_Conn().conn) {
      this._is_Conn().socket.emit("HANDEL_WORKPERIODS", props);
    } else {
      
    }
  }
}

const Backup = new Updater();
export default Backup;
