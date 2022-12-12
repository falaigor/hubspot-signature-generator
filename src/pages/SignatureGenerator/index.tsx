import { Clipboard, CopySimple, Plus } from "phosphor-react";
import { SignatureContainer } from "./styles";

export function SignatureGenerator() {
  return (
    <SignatureContainer>
      <header>Hubspot Signature Generator</header>

      <div>
        <form action="">
          <div>
            <label>Base URL</label>
            <input type="text" name="" id="" />
          </div>

          <div>
            <div className="propertie">
              <label>Properties</label>
              <button className="button_add_propertie">
                <Plus />
                Add propertie
              </button>
            </div>
            <input type="text" name="" id="" />
          </div>

          <div>
            <label>Method</label>
            <select name="" id="">
              <option value="">GET</option>
              <option value="">POST</option>
              <option value="">PUT</option>
              <option value="">DELETE</option>
              <option value="">PATCH</option>
            </select>
          </div>

          <div>
            <label>Body</label>
            <textarea name="" id="" />
          </div>
        </form>

        <div className="clipboard_copy">
          <input type="text" value="VALUE" id="" />
          <button>
            <CopySimple />
          </button>
        </div>
      </div>
    </SignatureContainer>
  );
}
