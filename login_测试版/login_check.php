<?php
        $port = $_POST['port'];
        $pass = $_POST['password'];

        echo $port;
        echo $pass;

        if($port == "")
        {
                echo"<script type='text/javascript'>alert('����д�û���');location='login.html';</script>";
                #echo"<script type='text/javascript'>alert('����д�û���');location='sjland.html';</script>";
        }
        elseif($pass == "")
        {
                #echo"<script type='text/javascript'>alert('����д����');location='sjland.html';</script>";
                echo"<script type='text/javascript'>alert('����д����');location='login.html';</script>";

        }
        else
        {
                // ��������
                $conn = mysqli_connect(getenv("MYSQL_ADDR"),getenv("MYSQL_USER"),getenv("MYSQL_PASS"),getenv("MYSQL_DATABASE"));
                // Check connection
                if (!$conn)
                {
                        die("����ʧ��: " . mysqli_connect_error());
                }
                mysqli_query("SET NAMES utf8");
                #$sql = "SELECT port , pass FROM port_pass Where port = $port and pass = $pass ";
                $sql = "SELECT * FROM port_pass Where port = $port and pass = $pass ";
                $result = mysqli_query($conn, $sql);
                $colum = mysqli_fetch_assoc($result);

                if(($colum['port'] == $port) && ($colum['pass'] == $pass))
                {
                        #echo "��֤�ɹ���<br>";
                        echo"<script type='text/javascript'>alert('��½�ɹ�');location='succ.html';</script>";
                 }
                else
                {
                        #echo"<script type='text/javascript'>alert('�������');location='sjland.html';</script>";
                        echo"<script type='text/javascript'>alert('�������');location='login.html';</script>";
                }
        }

?>