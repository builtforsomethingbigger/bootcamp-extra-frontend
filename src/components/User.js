import React from 'react';
// import { Route, Switch } from 'react-router-dom';

function User(props) {
  return (
    <div className="ui raised very padded text container segment blue">
        <div className="ui item">
            <div>
                <h1 className="ui dividing header">{props.username}</h1>
            </div>
            <div className="ui container">
              <table width="100%" cellSpacing="0" cellPadding="0" border="0">
                <tbody>
                  <tr>
                    <td align="left">
                      <table align="left" width="100%" cellSpacing="0" cellPadding="10" border="0">
                        <tbody>
                          <tr>
                            <td width="80px" align="left" valign="top"><b>NAME:</b>&nbsp;&nbsp;&nbsp;</td>
                            <td align="left" valign="top">{props.name}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td align="left">
                      <table align="left" width="100%" cellSpacing="0" cellPadding="10" border="0">
                        <tbody>
                          <tr>
                            <td width="80px" align="left" valign="top"><b>MOD:</b>&nbsp;&nbsp;&nbsp;</td>
                            <td align="left" valign="top">{props.mod}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <table align="left" width="100%" cellSpacing="0" cellPadding="10" border="0">
                        <tbody>
                          <tr>
                            <td width="80px" align="left" valign="top"><b>BIO:</b>&nbsp;&nbsp;&nbsp;</td>
                            <td align="left" valign="top">{props.bio}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
    </div>
  );
}

export default User;
