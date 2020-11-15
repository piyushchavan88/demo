-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.2.31-MariaDB - MariaDB Server
-- Server OS:                    Linux
-- HeidiSQL Version:             10.2.0.5713
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping data for table mistest1.vb_destination: ~3 rows (approximately)
DELETE FROM `vb_destination`;
/*!40000 ALTER TABLE `vb_destination` DISABLE KEYS */;
INSERT INTO `vb_destination` (`id`, `dest_name`, `status`, `added_by`, `add_time`) VALUES
	(1, 'DHANBAD RAILWAY STATION', '1', '877', '2018-06-27 15:46:05'),
	(2, 'BUS STAND, BARTAND', '1', '877', '2018-06-27 15:46:23'),
	(3, 'BHAGA RAILWAY STATION', '1', '877', '2018-06-27 15:46:43');
/*!40000 ALTER TABLE `vb_destination` ENABLE KEYS */;

-- Dumping data for table mistest1.vb_vehicles: ~13 rows (approximately)
DELETE FROM `vb_vehicles`;
/*!40000 ALTER TABLE `vb_vehicles` DISABLE KEYS */;
INSERT INTO `vb_vehicles` (`id`, `vehicle_type`, `registration_no`, `used_for`, `status`, `added_by`, `add_time`) VALUES
	(1, 'CAR', 'JH10AN-4225', 3, 1, '877', '2018-06-27 15:47:15'),
	(2, 'CAR', 'JH10AN-0592', 3, 1, '877', '2018-06-27 15:47:32'),
	(3, 'CAR', 'JH10H-4136', 3, 1, '877', '2018-06-27 15:47:50'),
	(4, 'UTILITY VEHICLE', 'JH10AH-8197', 3, 1, '877', '2018-06-27 15:48:14'),
	(5, 'UTILITY VEHICLE', 'JH10D-2599', 3, 1, '877', '2018-06-27 15:48:33'),
	(6, 'UTILITY VEHICLE', 'BR17E-6278', 3, 1, '877', '2018-06-27 15:48:53'),
	(7, 'BUS', 'JH10AJ-5308', 2, 1, '877', '2018-06-27 15:49:14'),
	(8, 'BUS', 'JH10AQ-6993', 2, 1, '877', '2018-06-27 15:49:44'),
	(9, 'BUS', 'JH10AQ-5422', 2, 1, '877', '2018-06-27 15:50:06'),
	(10, 'BUS', 'BR17P-1035', 2, 1, '877', '2018-06-27 15:50:26'),
	(11, 'MINI BUS', 'JH10M-4669', 2, 1, '877', '2018-06-27 15:51:02'),
	(12, 'MINI BUS', 'JH10AV-0268', 3, 1, '877', '2019-01-18 14:54:03'),
	(13, 'MINI BUS', 'JH10AV-3477', 3, 1, '877', '2019-01-18 14:54:22');
/*!40000 ALTER TABLE `vb_vehicles` ENABLE KEYS */;

-- Dumping data for table mistest1.vehicle_booking: ~3,706 rows (approximately)
DELETE FROM `vehicle_booking`;
/*!40000 ALTER TABLE `vehicle_booking` DISABLE KEYS */;
INSERT INTO `vehicle_booking` (`id`, `emp_no`, `booked_by`, `booked_by_name`, `booked_self`, `b_type`, `v_type`, `v_registration_no`, `intender_name`, `hod_id`, `hod_name`, `hod_desig`, `dir_id`, `dir_name`, `design`, `dept`, `bording_place`, `outside_dhn`, `destination`, `date`, `duration_from`, `duration_to`, `purpose`, `p_detail`, `t_name_number`, `driver`, `driver_name`, `charge`, `status`, `sup_id`, `sup_app_time`, `status_hod`, `hod_app_time`, `status_dir`, `dir_app_time`, `rej_reason`, `hod_rej_reason`, `dir_rej_reason`, `time_of_booking`, `sup_remark`, `project_no`) VALUES
	(1, '877', '877', 'Mr cc  Bhatia', 1, 'Personal', 'CAR', 'JH10AN-4225', 'MR xx  BHATIA', NULL, NULL, NULL, NULL, NULL, 'OTHERS', 'WORKSHOP SECTION', 'ASSTT. WORKSHOP SUPDT., WORKSHOP, ISM, DHANBAD, JHARKHAND - 826004', NULL, 'DHANBAD RAILWAY STATION', '2018-06-28', '4:45 PM', '5:45 PM', 'TRAVELLING TO STATION', NULL, 'SHATABDI EXP.', '462', 'BIR  BAHADUR', 0, 4, '877', '2018-06-29 13:19:00', 0, NULL, 0, NULL, NULL, NULL, NULL, '2018-06-27 15:59:08', NULL, NULL),
	(2, '412', '412', 'Mr S P xxx', 1, 'Personal', 'CAR', 'JH10AN-0592', 'MR S P xxx', NULL, NULL, NULL, NULL, NULL, 'SYSTEM ANALYST', 'ENVIRONMENTAL SCIENCE & ENGINEERING', 'SENIOR TECHNICAL ASSISTANT DEPARTMENT OF ESE (STA) QR NO C/25 ISMU TEACHERS COLONY,IIT ISM DHANBAD, JHARKHAND - 826004', NULL, 'DHANBAD RAILWAY STATION', '2018-07-07', '5:00 AM', '5:30 AM', 'MEDICAL CHECKUP', NULL, 'Coalfield Exp ', '462', 'BIR  BAHADUR', 60, 3, '877', '2018-07-06 15:04:36', 0, NULL, 0, NULL, NULL, NULL, NULL, '2018-06-29 09:32:26', NULL, NULL),
	(3, '968', '968', 'Dr P. M.  Sarun', 1, 'OFFICIAL', 'CAR', NULL, 'DR P. M.  SARUN', '1183', 'Prof cc  c', 'dt', NULL, NULL, 'ASSISTANT PROFESSOR', 'APPLIED PHYSICS', 'DHANBAD RAILWAY STATION', 'NO', 'STAFF ACADEMIC HOSTEL (SAH), IIT(ISM) DHANBAD', '2018-07-03', '7:00 AM', '8:00 AM', 'PICKUP OF PROF. S. A. HASHMI (EXAMINER, PH.D. VIVA VOCE EXAMINATION) FROM DHANBAD RAILWAY STATION AN', NULL, NULL, NULL, NULL, NULL, 5, NULL, NULL, 1, NULL, 0, NULL, NULL, NULL, NULL, '2018-06-29 10:58:06', NULL, NULL),
	(4, '968', '968', 'Dr P. M.  Sarun', 1, 'OFFICIAL', 'CAR', NULL, 'DR P. M.  SARUN', '1183', 'Prof cc  c', 'dt', NULL, NULL, 'ASSISTANT PROFESSOR', 'APPLIED PHYSICS', 'SAH, IIT(ISM), DHANBAD', 'NO', 'DHANBAD RAILWAY STATION', '2018-07-03', '10:45 AM', '10:45 AM', 'DROP OF PROF. S. A. HASHMI (EXAMINER, PH.D. VIVA VOCE EXAMINATION) FROM SAH, IIT(ISM) DHANBAD TO DHA', NULL, NULL, NULL, NULL, NULL, 5, NULL, NULL, 1, NULL, 0, NULL, NULL, NULL, NULL, '2018-06-29 11:01:22', NULL, NULL),
	
	(3758, '925', '925', 'Dr rrn', 1, 'Other', 'CAR', 'JH10AH-8197', 'DR rr', NULL, NULL, NULL, NULL, NULL, 'ASSISTANT PROFESSOR', 'ELECTRONICS ENGINEERING', 'BALIAPUR, DHANBAD, JHARKHAND', NULL, 'BALIAPUR', '2020-09-11', '1:00 PM', '1:00 PM', 'RESEARCH', 'DISCUSSION OF AUTO IRRIGATION AND SOIL MONITORING SYSTEM', '', '462', 'BIR  BAHADUR', 0, 1, '875', '2020-09-10 17:00:25', 0, NULL, 0, NULL, NULL, NULL, NULL, '2020-09-10 13:06:44', NULL, 'IEEE/2020-2021/718/ECE');
/*!40000 ALTER TABLE `vehicle_booking` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
