-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 31-10-2023 a las 16:29:53
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `dimaficl_bdespachos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comunas_chile`
--

DROP TABLE IF EXISTS `comunas_chile`;
CREATE TABLE IF NOT EXISTS `comunas_chile` (
  `id_comuna` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_comuna` varchar(60) NOT NULL,
  `region_comuna` int(11) NOT NULL,
  PRIMARY KEY (`id_comuna`),
  UNIQUE KEY `nombre_comuna` (`nombre_comuna`),
  KEY `region_comuna` (`region_comuna`)
) ENGINE=InnoDB AUTO_INCREMENT=347 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `comunas_chile`
--

INSERT INTO `comunas_chile` (`id_comuna`, `nombre_comuna`, `region_comuna`) VALUES
(1, 'Algarrobo', 12),
(2, 'Alhué', 16),
(3, 'Alto Biobío', 13),
(4, 'Alto del Carmen', 4),
(5, 'Alto Hospicio', 11),
(6, 'Ancud', 7),
(7, 'Andacollo', 5),
(8, 'Angol', 6),
(9, 'Antártica', 9),
(10, 'Antofagasta', 2),
(11, 'Antuco', 13),
(12, 'Arauco', 13),
(13, 'Arica', 3),
(14, 'Aysén', 1),
(15, 'Buin', 16),
(16, 'Bulnes', 10),
(17, 'Cabildo', 12),
(18, 'Cabo de Hornos', 9),
(19, 'Cabrero', 13),
(20, 'Calama', 2),
(21, 'Calbuco', 7),
(22, 'Caldera', 4),
(23, 'Calera de Tango', 16),
(24, 'Calle Larga', 12),
(25, 'Camarones', 3),
(26, 'Camiña', 11),
(27, 'Canela', 5),
(28, 'Cañete', 13),
(29, 'Carahue', 6),
(30, 'Cartagena', 12),
(31, 'Casablanca', 12),
(32, 'Castro', 7),
(33, 'Catemu', 12),
(34, 'Cauquenes', 15),
(35, 'Cerrillos', 16),
(36, 'Cerro Navia', 16),
(37, 'Chaitén', 7),
(38, 'Chanco', 15),
(39, 'Chañaral', 4),
(40, 'Chépica', 14),
(41, 'Chiguayante', 13),
(42, 'Chile Chico', 1),
(43, 'Chillán', 10),
(44, 'Chillán Viejo', 10),
(45, 'Chimbarongo', 14),
(46, 'Cholchol', 6),
(47, 'Chonchi', 7),
(48, 'Cisnes', 1),
(49, 'Cobquecura', 10),
(50, 'Cochamó', 7),
(51, 'Cochrane', 1),
(52, 'Codegua', 14),
(53, 'Coelemu', 10),
(54, 'Coihueco', 10),
(55, 'Coinco', 14),
(56, 'Colbún', 15),
(57, 'Colchane', 11),
(58, 'Colina', 16),
(59, 'Collipulli', 6),
(60, 'Coltauco', 14),
(61, 'Combarbalá', 5),
(62, 'Concepción', 13),
(63, 'Conchalí', 16),
(64, 'Concón', 12),
(65, 'Constitución', 15),
(66, 'Contulmo', 13),
(67, 'Copiapó', 4),
(68, 'Coquimbo', 5),
(69, 'Coronel', 13),
(70, 'Corral', 8),
(71, 'Coyhaique', 1),
(72, 'Cunco', 6),
(73, 'Curacautín', 6),
(74, 'Curacaví', 16),
(75, 'Curaco de Vélez', 7),
(76, 'Curanilahue', 13),
(77, 'Curarrehue', 6),
(78, 'Curepto', 15),
(79, 'Curicó', 15),
(80, 'Dalcahue', 7),
(81, 'Diego de Almagro', 4),
(82, 'Doñihue', 14),
(83, 'El Bosque', 16),
(84, 'El Carmen', 10),
(85, 'El Monte', 16),
(86, 'El Quisco', 12),
(87, 'El Tabo', 12),
(88, 'Empedrado', 15),
(89, 'Ercilla', 6),
(90, 'Estación Central', 16),
(91, 'Florida', 13),
(92, 'Freire', 6),
(93, 'Freirina', 4),
(94, 'Fresia', 7),
(95, 'Frutillar', 7),
(96, 'Futaleufú', 7),
(97, 'Futrono', 8),
(98, 'Galvarino', 6),
(99, 'General Lagos', 3),
(100, 'Gorbea', 6),
(101, 'Graneros', 14),
(102, 'Guaitecas', 1),
(103, 'Hijuelas', 12),
(104, 'Hualaihué', 7),
(105, 'Hualañé', 15),
(106, 'Hualpén', 13),
(107, 'Hualqui', 13),
(108, 'Huara', 11),
(109, 'Huasco', 4),
(110, 'Huechuraba', 16),
(111, 'Illapel', 5),
(112, 'Independencia', 16),
(113, 'Iquique', 11),
(114, 'Isla de Maipo', 16),
(115, 'Isla de Pascua', 12),
(116, 'Juan Fernández', 12),
(117, 'La Calera', 12),
(118, 'La Cisterna', 16),
(119, 'La Cruz', 12),
(120, 'La Estrella', 14),
(121, 'La Florida', 16),
(122, 'La Granja', 16),
(123, 'La Higuera', 5),
(124, 'La Ligua', 12),
(125, 'La Pintana', 16),
(126, 'La Reina', 16),
(127, 'La Serena', 5),
(128, 'La Unión', 8),
(129, 'Lago Ranco', 8),
(130, 'Lago Verde', 1),
(131, 'Laguna Blanca', 9),
(132, 'Laja', 13),
(133, 'Lampa', 16),
(134, 'Lanco', 8),
(135, 'Las Cabras', 14),
(136, 'Las Condes', 16),
(137, 'Lautaro', 6),
(138, 'Lebu', 13),
(139, 'Licantén', 15),
(140, 'Limache', 12),
(141, 'Linares', 15),
(142, 'Litueche', 14),
(143, 'Llanquihue', 7),
(144, 'Llay-Llay', 12),
(145, 'Lo Barnechea', 16),
(146, 'Lo Espejo', 16),
(147, 'Lo Prado', 16),
(148, 'Lolol', 14),
(149, 'Loncoche', 6),
(150, 'Longaví', 15),
(151, 'Lonquimay', 6),
(152, 'Los Álamos', 13),
(153, 'Los Andes', 12),
(154, 'Los Ángeles', 13),
(155, 'Los Lagos', 8),
(156, 'Los Muermos', 7),
(157, 'Los Sauces', 6),
(158, 'Los Vilos', 5),
(159, 'Lota', 13),
(160, 'Lumaco', 6),
(161, 'Machalí', 14),
(162, 'Macul', 16),
(163, 'Máfil', 8),
(164, 'Maipú', 16),
(165, 'Malloa', 14),
(166, 'Marchihue', 14),
(167, 'María Elena', 2),
(168, 'María Pinto', 16),
(169, 'Mariquina', 8),
(170, 'Maule', 15),
(171, 'Maullín', 7),
(172, 'Mejillones', 2),
(173, 'Melipeuco', 6),
(174, 'Melipilla', 16),
(175, 'Molina', 15),
(176, 'Monte Patria', 5),
(177, 'Mostazal', 14),
(178, 'Mulchén', 13),
(179, 'Nacimiento', 13),
(180, 'Nancagua', 14),
(181, 'Natales', 9),
(182, 'Navidad', 14),
(183, 'Negrete', 13),
(184, 'Ninhue', 10),
(185, 'Nogales', 12),
(186, 'Nueva Imperial', 6),
(187, 'Ñiquén', 10),
(188, 'Ñuñoa', 16),
(189, 'O´Higgins', 1),
(190, 'Olivar', 14),
(191, 'Ollagüe', 2),
(192, 'Olmué', 12),
(193, 'Osorno', 7),
(194, 'Ovalle', 5),
(195, 'Padre Hurtado', 16),
(196, 'Padre Las Casas', 6),
(197, 'Paihuano', 5),
(198, 'Paillaco', 8),
(199, 'Paine', 16),
(200, 'Palena', 7),
(201, 'Palmilla', 14),
(202, 'Panguipulli', 8),
(203, 'Panquehue', 12),
(204, 'Papudo', 12),
(205, 'Paredones', 14),
(206, 'Parral', 15),
(207, 'Pedro Aguirre Cerda', 16),
(208, 'Pelarco', 15),
(209, 'Pelluhue', 15),
(210, 'Pemuco', 10),
(211, 'Pencahue', 15),
(212, 'Penco', 13),
(213, 'Peñaflor', 16),
(214, 'Peñalolén', 16),
(215, 'Peralillo', 14),
(216, 'Perquenco', 6),
(217, 'Petorca', 12),
(218, 'Peumo', 14),
(219, 'Pica', 11),
(220, 'Pichidegua', 14),
(221, 'Pichilemu', 14),
(222, 'Pinto', 10),
(223, 'Pirque', 16),
(224, 'Pitrufquén', 6),
(225, 'Placilla', 14),
(226, 'Portezuelo', 10),
(227, 'Porvenir', 9),
(228, 'Pozo Almonte', 11),
(229, 'Primavera', 9),
(230, 'Providencia', 16),
(231, 'Puchuncaví', 12),
(232, 'Pucón', 6),
(233, 'Pudahuel', 16),
(234, 'Puente Alto', 16),
(235, 'Puerto Montt', 7),
(236, 'Puerto Octay', 7),
(237, 'Puerto Varas', 7),
(238, 'Pumanque', 14),
(239, 'Punitaqui', 5),
(240, 'Punta Arenas', 9),
(241, 'Puqueldón', 7),
(242, 'Purén', 6),
(243, 'Purranque', 7),
(244, 'Putaendo', 12),
(245, 'Putre', 3),
(246, 'Puyehue', 7),
(247, 'Queilén', 7),
(248, 'Quellón', 7),
(249, 'Quemchi', 7),
(250, 'Quilaco', 13),
(251, 'Quilicura', 16),
(252, 'Quilleco', 13),
(253, 'Quillón', 10),
(254, 'Quillota', 12),
(255, 'Quilpué', 12),
(256, 'Quinchao', 7),
(257, 'Quinta de Tilcoco', 14),
(258, 'Quinta Normal', 16),
(259, 'Quintero', 12),
(260, 'Quirihue', 10),
(261, 'Rancagua', 14),
(262, 'Ránquil', 10),
(263, 'Rauco', 15),
(264, 'Recoleta', 16),
(265, 'Renaico', 6),
(266, 'Renca', 16),
(267, 'Rengo', 14),
(268, 'Requínoa', 14),
(269, 'Retiro', 15),
(270, 'Rinconada', 12),
(271, 'Río Bueno', 8),
(272, 'Río Claro', 15),
(273, 'Río Hurtado', 5),
(274, 'Río Ibáñez', 1),
(275, 'Río Negro', 7),
(276, 'Río Verde', 9),
(277, 'Romeral', 15),
(278, 'Saavedra', 6),
(279, 'Sagrada Familia', 15),
(280, 'Salamanca', 5),
(281, 'San Antonio', 12),
(282, 'San Bernardo', 16),
(283, 'San Carlos', 10),
(284, 'San Clemente', 15),
(285, 'San Esteban', 12),
(286, 'San Fabián', 10),
(287, 'San Felipe', 12),
(288, 'San Fernando', 14),
(289, 'San Gregorio', 9),
(290, 'San Ignacio', 10),
(291, 'San Javier', 15),
(292, 'San Joaquín', 16),
(293, 'San José de Maipo', 16),
(294, 'San Juan de la Costa', 7),
(295, 'San Miguel', 16),
(296, 'San Nicolás', 10),
(297, 'San Pablo', 7),
(298, 'San Pedro', 16),
(299, 'San Pedro de Atacama', 2),
(300, 'San Pedro de La Paz', 13),
(301, 'San Rafael', 15),
(302, 'San Ramón', 16),
(303, 'San Rosendo', 13),
(304, 'San Vicente', 14),
(305, 'Santa Bárbara', 13),
(306, 'Santa Cruz', 14),
(307, 'Santa Juana', 13),
(308, 'Santa María', 12),
(309, 'Santiago', 16),
(310, 'Santo Domingo', 12),
(311, 'Sierra Gorda', 2),
(312, 'Talagante', 16),
(313, 'Talca', 15),
(314, 'Talcahuano', 13),
(315, 'Taltal', 2),
(316, 'Temuco', 6),
(317, 'Teno', 15),
(318, 'Teodoro Schmidt', 6),
(319, 'Tierra Amarilla', 4),
(320, 'Til Til', 16),
(321, 'Timaukel', 9),
(322, 'Tirúa', 13),
(323, 'Tocopilla', 2),
(324, 'Toltén', 6),
(325, 'Tomé', 13),
(326, 'Torres del Paine', 9),
(327, 'Tortel', 1),
(328, 'Traiguén', 6),
(329, 'Treguaco', 10),
(330, 'Tucapel', 13),
(331, 'Valdivia', 8),
(332, 'Vallenar', 4),
(333, 'Valparaíso', 12),
(334, 'Vichuquén', 15),
(335, 'Victoria', 6),
(336, 'Vicuña', 5),
(337, 'Vilcún', 6),
(338, 'Villa Alegre', 15),
(339, 'Villa Alemana', 12),
(340, 'Villarrica', 6),
(341, 'Viña del Mar', 12),
(342, 'Vitacura', 16),
(343, 'Yerbas Buenas', 15),
(344, 'Yumbel', 13),
(345, 'Yungay', 10),
(346, 'Zapallar', 12);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `despachos`
--

DROP TABLE IF EXISTS `despachos`;
CREATE TABLE IF NOT EXISTS `despachos` (
  `id_despacho` int(11) NOT NULL AUTO_INCREMENT,
  `usuario_despachador` int(11) NOT NULL,
  `sucursal_despacho` int(11) NOT NULL,
  `nombre_cliente` varchar(60) NOT NULL,
  `rut_cliente_despacho` varchar(12) NOT NULL,
  `direccion_calle_cliente` varchar(60) NOT NULL,
  `nro_calle_cliente` varchar(10) NOT NULL,
  `apto_cliente` varchar(10) DEFAULT NULL,
  `comuna_cliente` int(11) NOT NULL,
  `codigo_celular_cliente` int(11) NOT NULL DEFAULT '1',
  `celular_cliente` varchar(12) DEFAULT NULL,
  `tipo_documento` int(11) NOT NULL DEFAULT '1',
  `nro_documento` varchar(12) NOT NULL,
  `nro_oc` varchar(11) NOT NULL,
  `vehiculo_despacho` varchar(6) NOT NULL,
  `monto_venta` varchar(9) NOT NULL,
  `comentario_despacho` varchar(255) DEFAULT NULL,
  `estado_despacho` int(11) NOT NULL DEFAULT '1',
  `fecha_creacion_despacho` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_modificacion_despacho` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `fechayhora_comienzo_despacho` datetime DEFAULT NULL,
  `fechayhora_termino_despacho` datetime DEFAULT NULL,
  `estado_actividad` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id_despacho`),
  KEY `usuario_despachador` (`usuario_despachador`),
  KEY `vehiculo_despacho` (`vehiculo_despacho`),
  KEY `comuna_despacho` (`comuna_cliente`),
  KEY `estado_despacho` (`estado_despacho`),
  KEY `sucursal_usuario_despacho` (`sucursal_despacho`),
  KEY `codigo_celular_paises` (`codigo_celular_cliente`),
  KEY `tipo_documento` (`tipo_documento`),
  KEY `estado_actividad` (`estado_actividad`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado_actividad`
--

DROP TABLE IF EXISTS `estado_actividad`;
CREATE TABLE IF NOT EXISTS `estado_actividad` (
  `id_estado` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_estado` varchar(30) NOT NULL,
  PRIMARY KEY (`id_estado`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `estado_actividad`
--

INSERT INTO `estado_actividad` (`id_estado`, `nombre_estado`) VALUES
(1, 'Activo'),
(2, 'Inactivo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado_despacho`
--

DROP TABLE IF EXISTS `estado_despacho`;
CREATE TABLE IF NOT EXISTS `estado_despacho` (
  `id_estado` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_estado` varchar(30) NOT NULL,
  PRIMARY KEY (`id_estado`),
  UNIQUE KEY `nombre_estado` (`nombre_estado`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `estado_despacho`
--

INSERT INTO `estado_despacho` (`id_estado`, `nombre_estado`) VALUES
(3, 'Completado'),
(1, 'Espera'),
(2, 'Pendiente'),
(4, 'Rechazado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prefijos_telefonicos_paises`
--

DROP TABLE IF EXISTS `prefijos_telefonicos_paises`;
CREATE TABLE IF NOT EXISTS `prefijos_telefonicos_paises` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_pais` varchar(40) NOT NULL,
  `codigo_celular` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=243 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `prefijos_telefonicos_paises`
--

INSERT INTO `prefijos_telefonicos_paises` (`id`, `nombre_pais`, `codigo_celular`) VALUES
(1, 'Chile', '+56'),
(2, 'Albania', '+355'),
(3, 'Alemania', '+49'),
(4, 'Andorra', '+376'),
(5, 'Angola', '+244'),
(6, 'Anguila', '+1264'),
(7, 'Antártida', '+672'),
(8, 'Antigua y Barbuda', '+1268'),
(9, 'Antillas Holandesas', '+599'),
(10, 'Arabia Saudí', '+966'),
(11, 'Argelia', '+213'),
(12, 'Argentina', '+54'),
(13, 'Armenia', '+374'),
(14, 'Aruba', '+297'),
(15, 'Ascension Island', '+247'),
(16, 'Australia', '+61'),
(17, 'Austria', '+43'),
(18, 'Azerbaiyán', '+994'),
(19, 'Bahamas', '+1242'),
(20, 'Bahrain', '+973'),
(21, 'Bangladesh', '+880'),
(22, 'Barbados', '+1246'),
(23, 'Belarus', '+375'),
(24, 'Bélgica', '+32'),
(25, 'Belize', '+501'),
(26, 'Benin', '+229'),
(27, 'Bermuda', '+1441'),
(28, 'Bhutan', '+975'),
(29, 'Bolivia', '+591'),
(30, 'Bosnia y Herzegovina', '+387'),
(31, 'Botswana', '+267'),
(32, 'Brasil', '+55'),
(33, 'Brunei Darussalam', '+673'),
(34, 'Bulgaria', '+359'),
(35, 'Burkina Faso', '+226'),
(36, 'Burundi', '+257'),
(37, 'Cabo Verde', '+238'),
(38, 'Camboya', '+855'),
(39, 'Camerún', '+237'),
(40, 'Canadá', '+1'),
(41, 'Chad', '+235'),
(42, 'Chequia', '+420'),
(43, 'Afganistán', '+93'),
(44, 'China', '+86'),
(45, 'Chipre', '+357'),
(46, 'Colombia', '+57'),
(47, 'Comores, Islas', '+269'),
(48, 'Costa de Marfil', '+225'),
(49, 'Costa Rica', '+506'),
(50, 'Croacia', '+385'),
(51, 'Cuba', '+53'),
(52, 'Dinamarca', '+45'),
(53, 'Djibouti', '+253'),
(54, 'Dominica', '+1767'),
(55, 'Ecuador', '+593'),
(56, 'Egipto', '+20'),
(57, 'El Salvador', '+503'),
(58, 'Emiratos Árabes Unidos', '+971'),
(59, 'Eritrea', '+291'),
(60, 'Eslovaquia', '+421'),
(61, 'Eslovenia', '+386'),
(62, 'España', '+34'),
(63, 'Estados Federados de Micronesia', '+691'),
(64, 'Estados Unidos', '+1'),
(65, 'Estonia', '+372'),
(66, 'Esvalbard y Jan Mayen', '+79'),
(67, 'Etiopía', '+251'),
(68, 'Fiji', '+679'),
(69, 'Filipinas', '+63'),
(70, 'Finlandia', '+358'),
(71, 'Francia', '+33'),
(72, 'Gabón', '+241'),
(73, 'Gambia', '+220'),
(74, 'Georgia', '+995'),
(75, 'Ghana', '+233'),
(76, 'Gibraltar', '+350'),
(77, 'Granada', '+1473'),
(78, 'Grecia', '+30'),
(79, 'Groenlandia', '+299'),
(80, 'Guadalupe', '+590'),
(81, 'Guam', '+1671'),
(82, 'Guatemala', '+502'),
(83, 'Guernsey', '+44'),
(84, 'Guinea', '+224'),
(85, 'Guinea Ecuatorial', '+240'),
(86, 'Guinea Francesa', '+594'),
(87, 'Guinea-Bissau', '+245'),
(88, 'Guyana', '+592'),
(89, 'Haití', '+509'),
(90, 'Honduras', '+504'),
(91, 'Hong Kong', '+852'),
(92, 'Hungría', '+36'),
(93, 'India', '+91'),
(94, 'Indonesia', '+62'),
(95, 'Irak', '+964'),
(96, 'Irán', '+98'),
(97, 'Isla Navidad', '+61/672'),
(98, 'Islandia', '+354'),
(99, 'Islas Caimán', '+1345'),
(100, 'Islas Cook', '+682'),
(101, 'Islas de Norte-Mariana', '+1670'),
(102, 'Islas Feroe', '+298'),
(103, 'Islas Malvinas', '+500'),
(104, 'Islas Marshall', '+692'),
(105, 'Islas Norfolk', '+672'),
(106, 'Islas Salomón', '+677'),
(107, 'Islas Turks y Caicos', '+1649'),
(108, 'Islas Ultramarinas de Estados Unidos', '+808'),
(109, 'Islas Vírgenes Británicas', '+1284'),
(110, 'Islas Vírgenes Estadounidenses', '+1340'),
(111, 'Isle of Man', '+44'),
(112, 'Israel', '+972'),
(113, 'Italia', '+39'),
(114, 'Jamaica', '+1876'),
(115, 'Japón', '+81'),
(116, 'Jersey', '+44'),
(117, 'Jordania', '+962'),
(118, 'Kazajstán', '+7'),
(119, 'Kenia', '+254'),
(120, 'Kirgistán', '+996'),
(121, 'Kiribati', '+686'),
(122, 'Kuwait', '+965'),
(123, 'Lesoto', '+266'),
(124, 'Letonia', '+371'),
(125, 'Libano', '+961'),
(126, 'Liberia', '+231'),
(127, 'Libia', '+218'),
(128, 'Liechtenstein', '+41'),
(129, 'Lituania', '+370'),
(130, 'Luxemburgo', '+352'),
(131, 'Macao', '+853'),
(132, 'Macedonia', '+389'),
(133, 'Madagascar', '+261'),
(134, 'Malasia', '+60'),
(135, 'Malawi', '+265'),
(136, 'Maldivas', '+960'),
(137, 'Mali', '+223'),
(138, 'Malta', '+356'),
(139, 'Marruecos', '+212'),
(140, 'Martinica', '+596'),
(141, 'Mauricio', '+230'),
(142, 'Mauritania', '+222'),
(143, 'Mayote', '+269'),
(144, 'México', '+52'),
(145, 'Mianmar', '+95'),
(146, 'Moldavia', '+373'),
(147, 'Mónaco', '+377'),
(148, 'Mongolia', '+976'),
(149, 'Montserrat', '+1664'),
(150, 'Mozambique', '+258'),
(151, 'Namibia', '+264'),
(152, 'Nauru', '+674'),
(153, 'Nepal', '+977'),
(154, 'Nicaragua', '+505'),
(155, 'Níger', '+227'),
(156, 'Nigeria', '+234'),
(157, 'Niue', '+683'),
(158, 'Noruega', '+47'),
(159, 'Nueva Caledonia', '+687'),
(160, 'Nueva Zelanda', '+64'),
(161, 'Omán', '+968'),
(162, 'Países Bajos', '+31'),
(163, 'Pakistán', '+92'),
(164, 'Palau', '+680'),
(165, 'Palestina', '+970'),
(166, 'Panamá', '+507'),
(167, 'Papúa Nueva Guinea', '+675'),
(168, 'Paraguay', '+595'),
(169, 'Perú', '+51'),
(170, 'Pitcairn', '+872'),
(171, 'Polinesia Francesa', '+689'),
(172, 'Polonia', '+48'),
(173, 'Portugal', '+351'),
(174, 'Puerto Rico', '+1'),
(175, 'Qatar', '+974'),
(176, 'Reino Unido', '+44'),
(177, 'República Centroafricana', '+236'),
(178, 'República de Corea (Corea del Sur)', '+82'),
(179, 'República de Irlanda', '+353'),
(180, 'República del Congo', '+242'),
(181, 'República Democrática del Congo', '+243'),
(182, 'República Democrática Popular de Corea (', '+850'),
(183, 'República Democrática Popular de Laos', '+856'),
(184, 'República Dominicana', '+1809 / 1829 / 1849'),
(185, 'Reunión', '+262'),
(186, 'Ruanda', '+250'),
(187, 'Rumanía', '+40'),
(188, 'Rusia', '+7'),
(189, 'Sáhara Occidental', '+212'),
(190, 'Samoa Americana, Isla', '+684'),
(191, 'Samoa, Isla', '+685'),
(192, 'San Marino', '+378'),
(193, 'San Pedro y Miquelon', '+508'),
(194, 'San Vincente y Las Granadinas', '+1784'),
(195, 'Santa Helena', '+290'),
(196, 'Santa Kitts y Nevis', '+1869'),
(197, 'Santa Lucía', '+1758'),
(198, 'Santo Tomé y Príncipe', '+239'),
(199, 'Senegal', '+221'),
(200, 'Serbia y Montenegro', '+42'),
(201, 'Seychelles', '+248'),
(202, 'Sierra Leona', '+232'),
(203, 'Singapur', '+65'),
(204, 'Siria', '+963'),
(205, 'Somalia', '+252'),
(206, 'Sri Lanka', '+94'),
(207, 'Suazilandia', '+268'),
(208, 'Sudáfrica', '+27'),
(209, 'Sudán', '+249'),
(210, 'Suecia', '+46'),
(211, 'Suiza', '+41'),
(212, 'Surinám', '+597'),
(213, 'Tailandia', '+66'),
(214, 'Taiwán', '+886'),
(215, 'Tajikistán', '+992'),
(216, 'Tanzania', '+255/259'),
(217, 'Territorio Oceánico de la India Británic', '+246'),
(218, 'Timor', '+670'),
(219, 'Timor Leste', '+670'),
(220, 'Togo', '+228'),
(221, 'Tokelau', '+690'),
(222, 'Tongo', '+676'),
(223, 'Trinidad y Tobago', '+1868'),
(224, 'Túnez', '+216'),
(225, 'Turkmenistán', '+993'),
(226, 'Turquía', '+90'),
(227, 'Tuvalu', '+688'),
(228, 'Ucrania', '+380'),
(229, 'Uganda', '+256'),
(230, 'Unión Soviética', '+7'),
(231, 'Uruguay', '+598'),
(232, 'Uzbekistán', '+998'),
(233, 'Vanuatu', '+678'),
(234, 'Vaticano', '+379'),
(235, 'Venezuela', '+58'),
(236, 'Vietnam', '+84'),
(237, 'Wallis y Futuna', '+681'),
(238, 'Yemen', '+967'),
(239, 'Yugoslavia', '+381'),
(240, 'Zaire', '+243'),
(241, 'Zambia', '+260'),
(242, 'Zimbawe', '+263');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `privilegios_usuarios`
--

DROP TABLE IF EXISTS `privilegios_usuarios`;
CREATE TABLE IF NOT EXISTS `privilegios_usuarios` (
  `id_privilegios` int(11) NOT NULL AUTO_INCREMENT,
  `privilegio` varchar(20) NOT NULL,
  PRIMARY KEY (`id_privilegios`),
  UNIQUE KEY `privilegio` (`privilegio`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `privilegios_usuarios`
--

INSERT INTO `privilegios_usuarios` (`id_privilegios`, `privilegio`) VALUES
(1, 'Administrador'),
(2, 'Coordinador'),
(3, 'Despachador'),
(4, 'Lector');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `regiones_chile`
--

DROP TABLE IF EXISTS `regiones_chile`;
CREATE TABLE IF NOT EXISTS `regiones_chile` (
  `id_region` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_region` varchar(60) NOT NULL,
  PRIMARY KEY (`id_region`),
  UNIQUE KEY `nombre_region` (`nombre_region`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `regiones_chile`
--

INSERT INTO `regiones_chile` (`id_region`, `nombre_region`) VALUES
(2, 'Región de Antofagasta'),
(3, 'Región de Arica y Parinacota'),
(4, 'Región de Atacama'),
(1, 'Región de Aysén del General Carlos Ibáñez del Campo'),
(13, 'Región de Biobío'),
(5, 'Región de Coquimbo'),
(6, 'Región de la Araucanía'),
(7, 'Región de los Lagos'),
(8, 'Región de los Ríos'),
(9, 'Región de Magallanes y Antártida'),
(15, 'Región de Maule'),
(10, 'Región de Ñuble'),
(11, 'Región de Tarapacá'),
(12, 'Región de Valparaíso'),
(14, 'Región Lib. Gral. Bernardo O\'Higgins'),
(16, 'Región Metropolitana de Santiago');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sucursales`
--

DROP TABLE IF EXISTS `sucursales`;
CREATE TABLE IF NOT EXISTS `sucursales` (
  `id_sucursal` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_sucursal` varchar(30) NOT NULL,
  `estado_sucursal` int(11) NOT NULL DEFAULT '1',
  `fecha_creacion_sucursal` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_modificacion_sucursal` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_sucursal`),
  UNIQUE KEY `nombre_sucursal` (`nombre_sucursal`),
  KEY `estado_sucursal` (`estado_sucursal`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `sucursales`
--

INSERT INTO `sucursales` (`id_sucursal`, `nombre_sucursal`, `estado_sucursal`, `fecha_creacion_sucursal`, `fecha_modificacion_sucursal`) VALUES
(1, 'Casa Matriz', 1, '2023-01-08 13:33:02', '2023-01-11 15:16:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_documento`
--

DROP TABLE IF EXISTS `tipo_documento`;
CREATE TABLE IF NOT EXISTS `tipo_documento` (
  `id_tipo_documento` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_documento` varchar(30) NOT NULL,
  PRIMARY KEY (`id_tipo_documento`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tipo_documento`
--

INSERT INTO `tipo_documento` (`id_tipo_documento`, `nombre_documento`) VALUES
(1, 'Factura'),
(2, 'Guia de despacho'),
(3, 'Boleta');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_usuario` varchar(30) NOT NULL,
  `apellido_usuario` varchar(30) NOT NULL,
  `correo` varchar(60) NOT NULL,
  `contrasena` varchar(60) NOT NULL,
  `privilegio` int(11) NOT NULL,
  `sucursal` int(11) NOT NULL,
  `estado_usuario` int(11) NOT NULL DEFAULT '1',
  `fecha_creacion_usuario` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_modificacion_usuario` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `correo` (`correo`),
  KEY `privilegio_usuario` (`privilegio`),
  KEY `sucursal_usuario` (`sucursal`),
  KEY `estado_usuario` (`estado_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre_usuario`, `apellido_usuario`, `correo`, `contrasena`, `privilegio`, `sucursal`, `estado_usuario`, `fecha_creacion_usuario`, `fecha_modificacion_usuario`) VALUES
(1, 'Wilmer', 'Rodriguez', 'sis@dima.cl', '$2b$10$edy1v1iij1q.dtBrpZQmYu2obaPvetkhlSl8qfuRfFjMrq.T8D8fu', 1, 1, 1, '2023-01-13 13:31:02', '2023-01-18 15:18:08');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vehiculo`
--

DROP TABLE IF EXISTS `vehiculo`;
CREATE TABLE IF NOT EXISTS `vehiculo` (
  `patente` varchar(6) NOT NULL,
  `sucursal_vehiculo` int(11) NOT NULL,
  `estado_vehiculo` int(11) NOT NULL DEFAULT '1',
  `fecha_creacion_vehiculo` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_modificacion_vehiculo` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`patente`),
  KEY `sucusal_vehiculo` (`sucursal_vehiculo`),
  KEY `estado_vehiculo` (`estado_vehiculo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `vista_despachos_totales`
-- (Véase abajo para la vista actual)
--
DROP VIEW IF EXISTS `vista_despachos_totales`;
CREATE TABLE IF NOT EXISTS `vista_despachos_totales` (
`id_despacho` int(11)
,`usuario_despachador` varchar(61)
,`nombre_sucursal` varchar(30)
,`nombre_cliente` varchar(60)
,`rut_cliente_despacho` varchar(12)
,`direccion_calle_cliente` varchar(60)
,`nro_calle_cliente` varchar(10)
,`apto_cliente` varchar(10)
,`nombre_comuna` varchar(60)
,`codigo_celular` varchar(20)
,`celular_cliente` varchar(12)
,`nombre_documento` varchar(30)
,`nro_documento` varchar(12)
,`nro_oc` varchar(11)
,`patente` varchar(6)
,`monto_venta` varchar(9)
,`comentario_despacho` varchar(255)
,`nombre_estado` varchar(30)
,`fecha_creacion_despacho` datetime
,`fecha_modificacion_despacho` datetime
,`fechayhora_comienzo_despacho` datetime
,`fechayhora_termino_despacho` datetime
,`estado` varchar(30)
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `vista_sucursales`
-- (Véase abajo para la vista actual)
--
DROP VIEW IF EXISTS `vista_sucursales`;
CREATE TABLE IF NOT EXISTS `vista_sucursales` (
`id_sucursal` int(11)
,`nombre_sucursal` varchar(30)
,`nombre_estado` varchar(30)
,`fecha_creacion_sucursal` datetime
,`fecha_modificacion_sucursal` datetime
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `vista_usuarios`
-- (Véase abajo para la vista actual)
--
DROP VIEW IF EXISTS `vista_usuarios`;
CREATE TABLE IF NOT EXISTS `vista_usuarios` (
`id_usuario` int(11)
,`nombre_usuario` varchar(30)
,`apellido_usuario` varchar(30)
,`correo` varchar(60)
,`privilegio` varchar(20)
,`nombre_sucursal` varchar(30)
,`nombre_estado` varchar(30)
,`fecha_creacion_usuario` datetime
,`fecha_modificacion_usuario` datetime
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `vista_vehiculos`
-- (Véase abajo para la vista actual)
--
DROP VIEW IF EXISTS `vista_vehiculos`;
CREATE TABLE IF NOT EXISTS `vista_vehiculos` (
`patente` varchar(6)
,`nombre_sucursal` varchar(30)
,`nombre_estado` varchar(30)
,`fecha_creacion_vehiculo` datetime
,`fecha_modificacion_vehiculo` datetime
);

-- --------------------------------------------------------

--
-- Estructura para la vista `vista_despachos_totales`
--
DROP TABLE IF EXISTS `vista_despachos_totales`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vista_despachos_totales`  AS SELECT `despachos`.`id_despacho` AS `id_despacho`, concat(`usuarios`.`nombre_usuario`,' ',`usuarios`.`apellido_usuario`) AS `usuario_despachador`, `sucursales`.`nombre_sucursal` AS `nombre_sucursal`, `despachos`.`nombre_cliente` AS `nombre_cliente`, `despachos`.`rut_cliente_despacho` AS `rut_cliente_despacho`, `despachos`.`direccion_calle_cliente` AS `direccion_calle_cliente`, `despachos`.`nro_calle_cliente` AS `nro_calle_cliente`, `despachos`.`apto_cliente` AS `apto_cliente`, `comunas_chile`.`nombre_comuna` AS `nombre_comuna`, `prefijos_telefonicos_paises`.`codigo_celular` AS `codigo_celular`, `despachos`.`celular_cliente` AS `celular_cliente`, `tipo_documento`.`nombre_documento` AS `nombre_documento`, `despachos`.`nro_documento` AS `nro_documento`, `despachos`.`nro_oc` AS `nro_oc`, `vehiculo`.`patente` AS `patente`, `despachos`.`monto_venta` AS `monto_venta`, `despachos`.`comentario_despacho` AS `comentario_despacho`, `estado_despacho`.`nombre_estado` AS `nombre_estado`, `despachos`.`fecha_creacion_despacho` AS `fecha_creacion_despacho`, `despachos`.`fecha_modificacion_despacho` AS `fecha_modificacion_despacho`, `despachos`.`fechayhora_comienzo_despacho` AS `fechayhora_comienzo_despacho`, `despachos`.`fechayhora_termino_despacho` AS `fechayhora_termino_despacho`, `estado_actividad`.`nombre_estado` AS `estado` FROM ((((((((`despachos` join `usuarios` on((`despachos`.`usuario_despachador` = `usuarios`.`id_usuario`))) join `sucursales` on((`despachos`.`sucursal_despacho` = `sucursales`.`id_sucursal`))) join `comunas_chile` on((`despachos`.`comuna_cliente` = `comunas_chile`.`id_comuna`))) join `prefijos_telefonicos_paises` on((`despachos`.`codigo_celular_cliente` = `prefijos_telefonicos_paises`.`id`))) join `tipo_documento` on((`despachos`.`tipo_documento` = `tipo_documento`.`id_tipo_documento`))) join `vehiculo` on((`despachos`.`vehiculo_despacho` = `vehiculo`.`patente`))) join `estado_despacho` on((`despachos`.`estado_despacho` = `estado_despacho`.`id_estado`))) join `estado_actividad` on((`despachos`.`estado_actividad` = `estado_actividad`.`id_estado`))) ORDER BY `despachos`.`id_despacho` ASC ;

-- --------------------------------------------------------

--
-- Estructura para la vista `vista_sucursales`
--
DROP TABLE IF EXISTS `vista_sucursales`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vista_sucursales`  AS SELECT `sucursales`.`id_sucursal` AS `id_sucursal`, `sucursales`.`nombre_sucursal` AS `nombre_sucursal`, `estado_actividad`.`nombre_estado` AS `nombre_estado`, `sucursales`.`fecha_creacion_sucursal` AS `fecha_creacion_sucursal`, `sucursales`.`fecha_modificacion_sucursal` AS `fecha_modificacion_sucursal` FROM (`sucursales` join `estado_actividad` on((`sucursales`.`estado_sucursal` = `estado_actividad`.`id_estado`))) ORDER BY `sucursales`.`id_sucursal` ASC ;

-- --------------------------------------------------------

--
-- Estructura para la vista `vista_usuarios`
--
DROP TABLE IF EXISTS `vista_usuarios`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vista_usuarios`  AS SELECT `usuarios`.`id_usuario` AS `id_usuario`, `usuarios`.`nombre_usuario` AS `nombre_usuario`, `usuarios`.`apellido_usuario` AS `apellido_usuario`, `usuarios`.`correo` AS `correo`, `privilegios_usuarios`.`privilegio` AS `privilegio`, `sucursales`.`nombre_sucursal` AS `nombre_sucursal`, `estado_actividad`.`nombre_estado` AS `nombre_estado`, `usuarios`.`fecha_creacion_usuario` AS `fecha_creacion_usuario`, `usuarios`.`fecha_modificacion_usuario` AS `fecha_modificacion_usuario` FROM (((`usuarios` join `privilegios_usuarios` on((`usuarios`.`privilegio` = `privilegios_usuarios`.`id_privilegios`))) join `sucursales` on((`usuarios`.`sucursal` = `sucursales`.`id_sucursal`))) join `estado_actividad` on((`usuarios`.`estado_usuario` = `estado_actividad`.`id_estado`))) ORDER BY `usuarios`.`id_usuario` ASC ;

-- --------------------------------------------------------

--
-- Estructura para la vista `vista_vehiculos`
--
DROP TABLE IF EXISTS `vista_vehiculos`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vista_vehiculos`  AS SELECT `vehiculo`.`patente` AS `patente`, `sucursales`.`nombre_sucursal` AS `nombre_sucursal`, `estado_actividad`.`nombre_estado` AS `nombre_estado`, `vehiculo`.`fecha_creacion_vehiculo` AS `fecha_creacion_vehiculo`, `vehiculo`.`fecha_modificacion_vehiculo` AS `fecha_modificacion_vehiculo` FROM ((`vehiculo` join `estado_actividad` on((`vehiculo`.`estado_vehiculo` = `estado_actividad`.`id_estado`))) join `sucursales` on((`vehiculo`.`sucursal_vehiculo` = `sucursales`.`id_sucursal`))) ORDER BY `vehiculo`.`patente` ASC ;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comunas_chile`
--
ALTER TABLE `comunas_chile`
  ADD CONSTRAINT `region_comuna` FOREIGN KEY (`region_comuna`) REFERENCES `regiones_chile` (`id_region`);

--
-- Filtros para la tabla `despachos`
--
ALTER TABLE `despachos`
  ADD CONSTRAINT `codigo_celular_paises` FOREIGN KEY (`codigo_celular_cliente`) REFERENCES `prefijos_telefonicos_paises` (`id`),
  ADD CONSTRAINT `comuna_despacho` FOREIGN KEY (`comuna_cliente`) REFERENCES `comunas_chile` (`id_comuna`),
  ADD CONSTRAINT `estado_actividad` FOREIGN KEY (`estado_actividad`) REFERENCES `estado_actividad` (`id_estado`),
  ADD CONSTRAINT `estado_despacho` FOREIGN KEY (`estado_despacho`) REFERENCES `estado_despacho` (`id_estado`),
  ADD CONSTRAINT `sucursal_usuario_despacho` FOREIGN KEY (`sucursal_despacho`) REFERENCES `sucursales` (`id_sucursal`),
  ADD CONSTRAINT `tipo_documento` FOREIGN KEY (`tipo_documento`) REFERENCES `tipo_documento` (`id_tipo_documento`),
  ADD CONSTRAINT `usuario_despachador` FOREIGN KEY (`usuario_despachador`) REFERENCES `usuarios` (`id_usuario`),
  ADD CONSTRAINT `vehiculo_despacho` FOREIGN KEY (`vehiculo_despacho`) REFERENCES `vehiculo` (`patente`);

--
-- Filtros para la tabla `sucursales`
--
ALTER TABLE `sucursales`
  ADD CONSTRAINT `estado_sucursal` FOREIGN KEY (`estado_sucursal`) REFERENCES `estado_actividad` (`id_estado`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `estado_usuario` FOREIGN KEY (`estado_usuario`) REFERENCES `estado_actividad` (`id_estado`),
  ADD CONSTRAINT `privilegio_usuario` FOREIGN KEY (`privilegio`) REFERENCES `privilegios_usuarios` (`id_privilegios`),
  ADD CONSTRAINT `sucursal_usuario` FOREIGN KEY (`sucursal`) REFERENCES `sucursales` (`id_sucursal`);

--
-- Filtros para la tabla `vehiculo`
--
ALTER TABLE `vehiculo`
  ADD CONSTRAINT `estado_vehiculo` FOREIGN KEY (`estado_vehiculo`) REFERENCES `estado_actividad` (`id_estado`),
  ADD CONSTRAINT `sucusal_vehiculo` FOREIGN KEY (`sucursal_vehiculo`) REFERENCES `sucursales` (`id_sucursal`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
