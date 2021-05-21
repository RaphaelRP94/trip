
import java.io.BufferedReader;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import javax.swing.*;

/**
 *
 * @author Administrator
 */
public class Main extends javax.swing.JFrame {

    private javax.swing.JButton settingsButton;
    private javax.swing.JToggleButton toggleButton;
    private javax.swing.JLabel labelCorrectJWT;
    public static Boolean shoudWeProceed = true;
    public static String diretório = "C:\\Card_Adv\\Pedidos";
    public static Main mainScreen;
    public static JFrame settingsScreen;
    public static String commandsUrl = "http://localhost:8080/api/v1/commands";
    public static String feedbackUrl = " http://localhost:8080/api/v1/feedback";


    /**
     * Creates new form Main
     */
    public Main() {
        initComponents();
        this.setSize(500,300);
        this.setResizable(false);
        this.setLocation(400,300);
        this.toggleButton.setSelected(true);
        this.toggleButton.setText("Executando");
    }

    public static boolean connectionIsOkay(){
        return true;

    }

    public static void commandIsAvailable() throws MalformedURLException, IOException{

        URL url = new URL(Main.feedbackUrl);
        HttpURLConnection con = (HttpURLConnection) url.openConnection();
        con.setRequestMethod("GET");
        con.setRequestProperty("Content-Type", "application/json; utf-8");
        int responseCode = con.getResponseCode();

        System.out.println("GET Response Code :: " + responseCode);
        if(responseCode == HttpURLConnection.HTTP_OK) { // success
            BufferedReader in;
            in = new BufferedReader(new InputStreamReader(con.getInputStream()));
            String inputLine;
            StringBuffer response = new StringBuffer();

            while ((inputLine = in.readLine()) != null) {
                response.append(inputLine);
            }
            in.close();

            // print result
            System.out.println(response.toString());
        }
        else{
            System.out.println("GET request not worked");
        }
    }

    public static String concat(String jsonInputString,String receivedLine){
        String temporaryString = jsonInputString;
        String parametersArray[] = receivedLine.split(";");


        temporaryString = temporaryString+"{";
        temporaryString = temporaryString+"\"tripId\":"+parametersArray[0]+",";
        temporaryString = temporaryString+"\"amount\":"+String.valueOf(Integer.parseInt(parametersArray[1]))+",";
        temporaryString = temporaryString+"\"response\":"+"0"+",";



        temporaryString = temporaryString+"}";


        return temporaryString;
    }

    private static void packageAndSendFeedback(String[] arraysDividedBySlashes) throws MalformedURLException, IOException{
        URL url = new URL(Main.commandsUrl);
        HttpURLConnection con = (HttpURLConnection)url.openConnection();
        con.setRequestMethod("POST");
        con.setRequestProperty("Content-Type", "application/json; utf-8");
        con.setRequestProperty("Accept", "application/json");
        con.setDoOutput(true);
        String jsonInputString = "";
        int númeroDaSuíte = Integer.parseInt(arraysDividedBySlashes[0].split("@")[1].split("D")[1]);



        jsonInputString = jsonInputString+"[";

        for(int i=1;i<arraysDividedBySlashes.length;i++){
            if(i == (arraysDividedBySlashes.length - 1)){
                jsonInputString = Main.concat(jsonInputString,arraysDividedBySlashes[i].split("#")[0]);
            }
            else{
                jsonInputString = Main.concat(jsonInputString,arraysDividedBySlashes[i]);
                jsonInputString = jsonInputString+",";
            }
        }

        jsonInputString = jsonInputString+"]}";

        System.out.println("OUTPUT:\n\n"+jsonInputString+"\n\n\n");


        try(OutputStream os = con.getOutputStream()) {
            System.out.println("L1");
            byte[] input = jsonInputString.getBytes("utf-8");
            System.out.println("L2");
            os.write(input, 0, input.length);
            System.out.println("L3");
        }
        catch(MalformedURLException e){
            System.out.println("Out of standard url");
        }
        catch(IOException e){
            System.out.println("Java IO Exception");
        }

        System.out.println("L4");

        try(BufferedReader br = new BufferedReader(new InputStreamReader(con.getInputStream(), "utf-8"))) {
            System.out.println("L5");
            StringBuilder response = new StringBuilder();
            System.out.println("L6");
            String responseLine = "";
            System.out.println("L7");
            while ((responseLine = br.readLine()) != null) {
                System.out.println("L8");
                response.append(responseLine.trim());
                System.out.println("L9");
            }

        }
        catch(MalformedURLException e){
            System.out.println("Exception. Url out of pattern");
        }
        catch(IOException e){
            System.out.println("Java IO Exception reading answer");
        }
    }

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        settingsButton = new javax.swing.JButton();
        toggleButton = new javax.swing.JToggleButton();
        labelCorrectJWT = new javax.swing.JLabel();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setTitle("JWT Receiver");

        settingsButton.setText("Settings");
        settingsButton.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                settingsButtonActionPerformed(evt);
            }
        });

        toggleButton.setText("Executar");
        toggleButton.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                toggleButtonActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
                layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(layout.createSequentialGroup()
                                .addContainerGap()
                                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addGroup(layout.createSequentialGroup()
                                                .addComponent(labelCorrectJWT, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                                .addContainerGap())
                                        .addGroup(layout.createSequentialGroup()
                                                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                        .addComponent(settingsButton, javax.swing.GroupLayout.PREFERRED_SIZE, 108, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                        .addComponent(toggleButton, javax.swing.GroupLayout.PREFERRED_SIZE, 108, javax.swing.GroupLayout.PREFERRED_SIZE))
                                                .addGap(0, 282, Short.MAX_VALUE))))
        );
        layout.setVerticalGroup(
                layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(layout.createSequentialGroup()
                                .addGap(37, 37, 37)
                                .addComponent(toggleButton, javax.swing.GroupLayout.PREFERRED_SIZE, 40, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGap(43, 43, 43)
                                .addComponent(labelCorrectJWT, javax.swing.GroupLayout.DEFAULT_SIZE, 67, Short.MAX_VALUE)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(settingsButton, javax.swing.GroupLayout.PREFERRED_SIZE, 43, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGap(64, 64, 64))
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void settingsButtonActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_settingsButtonActionPerformed
        Main.mainScreen.setVisible(false);
    }//GEN-LAST:event_settingsButtonActionPerformed

    private void toggleButtonActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_toggleButtonActionPerformed
        if(this.toggleButton.isSelected()){
            if(Main.connectionIsOkay()){
                this.toggleButton.setText("Running");
                Main.shoudWeProceed = true;
            }
            else{
                this.toggleButton.setSelected(false);
                this.labelCorrectJWT.setText("Link does not exist");
                Main.shoudWeProceed = false;
            }
        }
        else{
            this.toggleButton.setText("Stopped");
            Main.shoudWeProceed = false;
        }
    }//GEN-LAST:event_toggleButtonActionPerformed

    /**
     * @param args the command line arguments
     * @throws java.lang.Exception
     */
    public static void main(String args[]) throws Exception {
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(Main.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(Main.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(Main.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(Main.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>
        Main.mainScreen = new Main();
        Main.mainScreen.setVisible(true);
        String arraysDividedBySlashes[];
        String receivedInstruction = "";



        while(true){
            //to do command received here            
            //receivedInstruction = server.listen();

            System.out.println(receivedInstruction);

            if(Main.shoudWeProceed && Main.connectionIsOkay()){
                if(receivedInstruction.length() == 3){ //3 parameters: tripId, amount and description
                    arraysDividedBySlashes = receivedInstruction.split("/");
                    Main.packageAndSendFeedback(arraysDividedBySlashes);
                }
            }
        }
    }
}