<?php

error_reporting(0);
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With, content-type, Authorization, Content-Type, token');
header('content-type: application/json; charset=utf-8');


//local kompute
$host = "localhost";
$user = "root";
$pass = "";
$db = "inventori";

// remote database koneksi web
// $host = "remotemysql.com";
// $user = "JCVuDJCuOy";
// $pass = "E16eNziX4I";
// $db = "JCVuDJCuOy";
$connection = mysqli_connect($host,$user,$pass,$db);

if(!$connection) {
    die("Koneksi gagal: " . mysqli_connect_error());
}

$op = $_GET['op'];
switch ($op) {
    case 'showalluser': showalluser();break;
    case 'showdatauser': showdatauser();break;
    case 'create': create();break;
    case 'createpost': createpost();break;
    case 'update': update(); break;
    case 'delete': delete();break;
    case 'detail': detail();break;
    default: echo 'Jajal';break;
}

function showalluser(){
    global $connection;
    $sql = "SELECT * FROM kelolabarang order by id desc";
    $query = mysqli_query($connection,$sql);
    while($r = mysqli_fetch_array($query)){
        $result[] = array(
            'id' => $r['id'],
            'namabarang' => $r['namabarang'],
            'harga' => $r['harga']
        );
    }
    $data['data']['result'] = $result;
    echo json_encode($data);
}

function create(){
    global $connection;
    $json = file_get_contents('php://input');
    $obj = json_decode($json,true);
    $namabarang = $obj['namabarang'];
    $harga = $obj['harga'];
    if($namabarang and $harga){
        $sql = "INSERT INTO kelolabarang(namabarang,harga) VALUES ('$namabarang','$harga')";
        $query = mysqli_query($connection,$sql);
        if($query){
            $hasil = "Berhasil menambahkan data";
        }else{
            $hasil =  "Gagal menambahkan data";
        }
    }
    $data['data']['result'] = $hasil;
    echo json_encode($data);
}

function delete()
{
global $connection;
$id = $_GET['id'];
$sql1 = "delete from kelolabarang where id = '$id'";
$q1 = mysqli_query($connection, $sql1);
if ($q1) {
$hasil = "Berhasil menghapus data";
} else {
$hasil = "Gagal menghapus data";
}
$data['data']['result'] = $hasil;
echo json_encode($data);
}

function detail()
{
global $connection;
$id = $_GET['id'];
$sql1 = "select * from kelolabarang where id = '$id'";
$q1 = mysqli_query($connection, $sql1);
while ($r1 = mysqli_fetch_array($q1)) {
$hasil[] = array(
'id' => $r1['id'],
'namabarang' => $r1['namabarang'],
'harga' => $r1['harga'],

);
}
$data['data']['result'] = $hasil;
echo json_encode($data);
}

function update()
{
global $connection;
$id = $_GET['id'];
$namabarang = $_POST['namabarang'];
$harga = $_POST['harga'];
if ($namabarang) {
$set[] = "namabarang='$namabarang'";
}
if ($harga) {
$set[] = "harga='$harga'";
}
$hasil = "Gagal melakukan update data";
if ($namabarang or $harga) {
$sql1 = "update kelolabarang set " . implode(",",
$set) . " where id = '$id'";
$q1 = mysqli_query($connection, $sql1);
if ($q1) {
$hasil = "Data berhasil diupdate";
}
}
$data['data']['result'] = $hasil;
echo json_encode($data);
}



?>