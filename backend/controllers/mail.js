// mailtmClient.js
import Mailjs from "@cemalgnlts/mailjs";

const mailjs = new Mailjs();

export async function createMailbox(req, res) {
  try {
    
    const account = await mailjs.createOneAccount();
    console.log(account);
    if(!account)return res.status(401).json({success:false,message:"failed to create account"});
    const username = account.data.username
    const password = account.data.password

    
    // 3️⃣ Optional: login to get token
    const login = await mailjs.login(username, password);
    console.log(login);

    return res.status(200).json({
      success: true,
      message: "Temp mail created successfully",
      mail: {
        username,
        password,
        token: login.data.token,
        id: login.data.id
      }
    });
  } catch (error) {
    console.error("Error creating mailbox:", error);
    return res.status(500).json({
      success: false,
      message: "Problem in generate mail controller",
      error: error.message
    });
  }
}
export const getAllMessages = async (req, res) => {
  try {
    // ✅ Extract the actual token string
    const { token } = req.body;
    if (!token) {
      return res.status(400).json({ success: false, message: "Token required" });
    }

    // ✅ Create a Mailjs instance and set token
    const mailjs = new Mailjs();
    mailjs.token = token;

    // ✅ Fetch messages (no args)
    const messages = await mailjs.getMessages();

    return res.status(200).json({
      success: true,
      message: "Inbox fetched successfully",
      inbox: messages.data,
    });
  } catch (error) {
    console.error("Error fetching inbox:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch inbox",
      error: error.message,
    });
  }
};


export const getMessage =async(req,res)=>{
  try {
    const {token,messageId} = req.body;
    if(!token || !messageId){
      return res.status(400).json({success:false,message:"prvvoide token and messageId"});
    }

    const mailjs = new Mailjs();
    mailjs.token = token;

    const message = await mailjs.getMessage(messageId);

    return res.status(200).json({success:false,message:"get message succesfully",message:message})
    
  } catch (error) {
    console.log("error in the get on message controller",error);
    return res.status(500).json({success:false,message:"failed to get one message",error:error.message})
    
  }

}