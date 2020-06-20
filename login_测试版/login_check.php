<?php
        $port = $_POST['port'];
        $pass = $_POST['password'];

        echo $port;
        echo $pass;

        if($port == "")
        {
                echo"<script type='text/javascript'>alert('请填写用户名');location='login.html';</script>";
                #echo"<script type='text/javascript'>alert('请填写用户名');location='sjland.html';</script>";
        }
        elseif($pass == "")
        {
                #echo"<script type='text/javascript'>alert('请填写密码');location='sjland.html';</script>";
                echo"<script type='text/javascript'>alert('请填写密码');location='login.html';</script>";

        }
        else
        {
                // 创建连接
                $conn = mysqli_connect(getenv("MYSQL_ADDR"),getenv("MYSQL_USER"),getenv("MYSQL_PASS"),getenv("MYSQL_DATABASE"));
                // Check connection
                if (!$conn)
                {
                        die("连接失败: " . mysqli_connect_error());
                }
                mysqli_query("SET NAMES utf8");
                #$sql = "SELECT port , pass FROM port_pass Where port = $port and pass = $pass ";
                $sql = "SELECT * FROM port_pass Where port = $port and pass = $pass ";
                $result = mysqli_query($conn, $sql);
                $colum = mysqli_fetch_assoc($result);

                if(($colum['port'] == $port) && ($colum['pass'] == $pass))
                {
                        #echo "验证成功！<br>";
                        echo"<script type='text/javascript'>alert('登陆成功');location='succ.html';</script>";
                 }
                else
                {
                        #echo"<script type='text/javascript'>alert('密码错误');location='sjland.html';</script>";
                        echo"<script type='text/javascript'>alert('密码错误');location='login.html';</script>";
                }
        }

?>